# Routes API

- [Introduction](#introduction)
- [Create Route API In Next.js APP](#create-route-api-in-nextjs-app)
- [function handler(req, res)](#function-handlerreq-res)
- [config](#config)

## Introduction

- create an [API](/unsorted/api.md) endpoint inside Next.js APP
- do not fetch API Route from `getStaticProps` or `getServerSideProps`
- access use `http://localhost:3000/apidir/jsfilename`

## Create Route API In Next.js APP

key points:

- write a `export default function hander(req, res)` in `.js` file

talk about create a `http://localhost:3000/api/hello` in Next.js APP

pages/api/hello.js

```js
export default function handler(req, res) {
  res.status(200).json({name: 'john doe'});
}
```

- req: request, [http.IncomingMessage]
- res: response, [http.ServerResponse]

access to `http://localhost:3000/api/hello` in browser

```json
{"name":"john doe"}
```

## function handler(req, res)

function handler(req, res) takes two arguments:

- req
- res

parameters

> use req, res to set the detail of http request and response

res

- `res.status(code)`: set Http status code
- `res.json(body)`: send response body
- res.send()
- res.redirect()
- res.revalidate(urlPath)

req

- req.cookies: An Object of cookies sent by the request
- req.query: An Object of query string
- req.body: An Object of request body, paresed by content-type

## config

> write in the same file of API route, like `pages/api/hello.js`

- to configure the req, res Object performance

将resquest body 当做stream或 raw data(原始数据), 可以这样设置

```js
export const config = {
  api: {
    bodyParser: false,
  }
}
```

- `req.body` will be `undefined`

设置request body的最大限制

```js
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    }
  }
}
```