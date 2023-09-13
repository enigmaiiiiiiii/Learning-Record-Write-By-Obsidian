# Http - Cross-Origin Resource Sharing (CORS) Preflighted Requests

## What It is

- use to check if server support CORS

## Send Preflighted Request

- header method is [`OPTIONS`](http-request-method.md#options)
- browser automatically send preflighted request
- send a http request to check if server support CORS, generally include following headers
  - Origin
  - Access-Control-Request-Method
  - Access-Control-Request-Headers

code that will trigger preflighted request


```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');
xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');  // cause preflighted request
xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```

- Cause `Content-Type` header is `application/xml`, so browser will send preflighted request

interact process of client and server

- first interaction is preflighted request/response

1. client send preflighted request

- contains `OPTIONS` [request line](http-request-message.md#request-line)
- contains `Origin: http://foo.example` [header field](http-request-header.md)
- contains `Access-Control-Request-*` [header field](http-request-header.md)

2. server side response http preflighted request

- include `Access-Control-Allow-*: http://foo.example` [header field](http-response-message.md#header-lines)

3. POST Request

- won't carry `Access-Control-Request-*` [header field](http-request-header.md)

4. Server side request

- Carry `Allow-Control-Allow-Origin` [header field](http-request-header.md)
- Carry `Vary: Accept-Encoding, Origin` [header field](http-request-header.md) 

## condition that will not trigger preflighted request

- request method is one `GET`, `HEAD`, `POST`之一
- 包含自动设置的头部字段
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
    - 只限于`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`
- 任意[XMLHttpRequest](javascript-bom-xmlhttprequest.md)对象没有注册任何事件监听器
- 没有使用任何[ReadableStream]对象

## 如果服务器允许, 会响应这个预检请求

一般包括以下几个头部字段

- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Max-Age: 在此时间内浏览器无需为同一请求再次发送预检请求
- Access-Control-Allow-Credentials
- Access-Control-Expose-Headers
