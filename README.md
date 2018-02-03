# unthen

Convert anything to Promise that resolves to `[err, res]` array

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i unthen
```

## Usage

```js
const unthen = require('unthen');

(async function(){
    console.log(await unthen(1));                           //resolves to [null, 1]
    console.log(await unthen(new Error()));                 //resolves to [Error: ]
    console.log(await unthen(Promise.resolve(1)));          //resolves to [null, 1]
    console.log(await unthen(Promise.reject(new Error()))); //resolves to [Error: ]
})()
```

## License

MIT

[npm-url]: https://npmjs.org/package/unthen
[npm-image]: https://badge.fury.io/js/unthen.svg
[travis-url]: https://travis-ci.org/astur/unthen
[travis-image]: https://travis-ci.org/astur/unthen.svg?branch=master