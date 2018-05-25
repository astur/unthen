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

## Why?..

Just because [err, res] way is more familiar for many of us, even in promise epoch.

Classic way (from [this](https://blog.risingstack.com/mastering-async-await-in-nodejs/) article):

```js
async function handler (req, res) {
    let response
    try {
        response = await request('https://user-handler-service')  
    } catch (err) {
        logger.error('Http error', err)
        return res.status(500).send()
    }

    let document
    try {
        document = await Mongo.findOne({ user: response.body.user })
    } catch (err) {
        logger.error('Mongo error', err)
        return res.status(500).send()
    }

    executeLogic(document, req, res)
}
```

New way with `unthen`:

```js
const U = require('unthen');
async function handler (req, res) {
    const [httpErr, response] = await U(request('https://user-handler-service'))
    if (httpErr) {
        logger.error('Http error', err)
        return res.status(500).send()
    }

    const [mongoErr, document] = await U(Mongo.findOne({ user: response.body.user }))
    if(mongoErr) {
        logger.error('Mongo error', err)
        return res.status(500).send()
    }

    executeLogic(document, req, res)
}
```

## License

MIT

[npm-url]: https://npmjs.org/package/unthen
[npm-image]: https://badge.fury.io/js/unthen.svg
[travis-url]: https://travis-ci.org/astur/unthen
[travis-image]: https://travis-ci.org/astur/unthen.svg?branch=master