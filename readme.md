# babel-plugin-twitter

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/babel-plugin-twitter.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/babel-plugin-twitter.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-twitter)
[![CircleCI](https://circleci.com/gh/akameco/babel-plugin-twitter.svg?style=svg)](https://circleci.com/gh/akameco/babel-plugin-twitter)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> import from tweeeeeeet!!!!!!!!!!!!!

Inspire by https://gist.github.com/rauchg/5b032c2c2166e4e36713

## Install

```
$ yarn add --dev babel-plugin-twitter
```

## Usage

.babelrc

```js
{
  "plugins": ["babel-plugin-twitter"]
}
```

## Examples

```js
import leftPad from 'twitter:712799807073419264'

console.log(leftPad(1, 5)) // '00001'
console.log(leftPad(1234, 5)) // '01234'
console.log(leftPad(12345, 5)) // '12345'
```

More Example?

open `examples/index.js` and coding!
And `yarn run example` :)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
