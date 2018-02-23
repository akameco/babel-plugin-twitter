// @flow
import path from 'path'
import rimraf from 'rimraf'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

jest.mock('./tweet')
import tweet from './tweet' // eslint-disable-line import/first,import/imports-first

const code = `
export default (v, n, c = '0') => String(v).length >= n ? '' + v : (String(c).repeat(n) + v).slice(-n)
`
// $FlowFixMe
tweet.mockImplementation(() => code)

afterAll(() => {
  rimraf.sync(path.resolve(__dirname, '..', 'node_modules/.cache/'))
})

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  tests: [
    `import leftPad from 'twitter:712799807073419264'`,
    {
      title: 'use cache',
      code: `
    import leftPad from 'twitter:712799807073419264'
    `,
    },
    {
      title: 'typo',
      code: `
    import leftPad from 'tweeeeeeettteerrr:712799807073419264'
    `,
    },
  ],
})
