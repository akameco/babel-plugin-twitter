// @flow weak
import { transform } from 'babel-core'
import { decodeHTML as decode } from 'entities'
import Cache from './cache'
import tweet from './tweet'
// import blog from 'babel-log'

const cache = new Cache()

const getTweet = id => {
  if (cache.has(id)) {
    return cache.get(id)
  }
  const text = tweet(id)
  cache.set(id, text)
  return decode(text)
}

export default ({ types: t, traverse, template }) => {
  const builder = template(`const NAME = BODY`)

  const importDeclaration = path => {
    const { node: src } = path.get('source.value')
    const { node: name } = path.get('specifiers.0.local.name')
    if (src && src.startsWith('twitter:')) {
      const id = src.replace('twitter:', '')
      const { ast } = transform(getTweet(id))
      traverse(ast, {
        ExportDefaultDeclaration(twPath) {
          // export default ...
          const decPath = twPath.get('declaration')
          const output = builder({ NAME: t.identifier(name), BODY: decPath })
          path.replaceWith(output)
        },
      })
    }
  }

  return {
    name: 'twitter',
    visitor: {
      ImportDeclaration: importDeclaration,
    },
  }
}
