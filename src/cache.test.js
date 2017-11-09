// @flow
import rimraf from 'rimraf'
import Cache from './cache'

afterAll(() => {
  rimraf.sync('../node_modules/.cache/babel-plugin-twitter')
})

test('cache', () => {
  const cache = new Cache()
  const id = 'test'
  cache.set(id, 'hello')
  expect(cache.has(id)).toBe(true)
  expect(cache.get(id)).toBe('hello')
  expect(cache.has('no-cache')).toBe(false)
  expect(cache.get('no-cache')).toBe(null)
})
