# Routes API

- [Introduction](#introduction)
- [Create Route API In Next.js APP](#create-route-api-in-nextjs-app)
- [Dynamic API Route](#dynamic-api-route)
- [function handler(req, res)](#function-handlerreq-res)
- [send a response](#send-a-response)
- [config](#config)

## Introduction

- create an [API](/unsorted/api.md) endpoint inside Next.js APP
- do not fetch API Route from `getStaticProps` or `getServerSideProps`
- access use `http://localhost:3000/apidir/jsfilename`
- respect the [file system routing](nextjs-file-system-routing.md) rules

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

- use **req, res** to set the detail of http **request** and **response**

## send a response

> refer to [http.response](nodejs-http-response.md)

```js
export default async function handler(req, res) {
  res.status(200).send({name: 'john doe'});
}
```

methods detail

- `res.status(code)`: set Http status code
- `res.json(body)`: send a JSON response, body must can be convert to json string
- `res.send(body)`: 
  - sends http response, and automatically set the content-type
  - `body` can be string, object, array, buffer
- `res.end(data)`
  - end the response and send any data in buffered
  - type of `data` is string | [Buffer](nodejs-buffer.md) | Unit8Array
- `res.redirect()`
- `res.revalidate(urlPath)`

## handle request

req parameter in function handler(req, res)

> refer:
> - [http.incomingmessage](nodejs-http-request.md)
> - [res](nodejs-express-api-request.md)

- req.cookies: An Object of cookies sent by the request
- req.query: An Object of [**query string**] or [Dynamic Route]() parameters
- req.body: An Object of request body, paresed by content-type

request with query string

- for url `http://localhost:port/api/hello?name=john&age=20`

```js
export default function handler(req, res) {
  const {name, age} = req.query;
  res.end(`Hello ${name}, you are ${age} years old`);
}
```

## Dynamic API Route

`/api/posts/[postId].js`

- matches route like
  - `/api/posts/1`
  - `/api/posts/abc`
- `req.query` is an object like
  - `{postId: '1'}`
  - `{postId: 'abc'}`

```js
export default function handler(req, res) {
  const { postId } = req.query;
  res.end(`Post: ${pid}`)
}
```

`/api/posts/[..slug]`: match extend routes

- can matches route like
  - `/api/posts/1/2/3`
  - `/api/posts/a/b`
- `req.query` is an object like
  - `{slug: ['1', '2', '3']}`
  - `{slug: ['a', 'b']}`

`/api/posts/[[...slug]].js`: match extend routes and empty route

- can matches route like
  - `/api/posts/1/2/3`
  - `/api/posts/a/b`
  - `/api/posts/`
- req.query is an object like
  - `{slug: ['1', '2', '3']}`
  - `{slug: ['a', 'b']}`
  - `{slug: []}`

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