# Cross-Origin Resource Sharing (CORS) Preflighted Requests

## What It is

- use to check if server support CORS

## Send Preflighted Request

- header method is [`OPTIONS`](http-request-method.md#options)
- browser automatically send preflighted request
- send a http request to check if server support CORS, generally include following headers
  - Origin
  - Access-Control-Request-Method
  - Access-Control-Request-Headers

需要执行预检请求的代码

- 因为Content-Type头部字段为`application/xml`, 所以会发送预检请求

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');
xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```
interact process of client and server

- first interaction is preflighted request/response

1. client send preflighted request
    - 包含OPTIONS请求行
    - 包含Origin: http://foo.example头部字段
    - 包含Access-Control-Request-*头部字段
2. 服务端响应http预检报文
    - 包含Access-Control-Allow-*头部字段
3. POST请求
    - 不会携带Access-Control-Request-*头部字段
4. 服务端请求
    - 会携带Allow-Control-Allow-Origin头部字段
    - 携带Vary: Accpet-Encoding, Origin头部字段

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
