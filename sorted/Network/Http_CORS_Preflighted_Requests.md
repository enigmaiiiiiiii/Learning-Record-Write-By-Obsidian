# 预检请求

- 用于检查服务器是否支持CORS

## 发送预检请求

- 首部方法为`OPTIONS`
- 由浏览器自动生成预检请求
- 发送检查服务器是否支持CORS的http请求, 一般包括以下几个头部字段
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
客户端与服务器交互过程

- 首次交互为预检请求/响应

1. 客户端发送包含预检请求http报文
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

## 不会触发预检请求的情况, 满足以下所有条件

- 请求方法是`GET`, `HEAD`, `POST`之一
- 包含自动设置的头部字段
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
    - 只限于`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`
- 任意[XMLHttpRequest](javascript_XMLHttpRequest.md)对象没有注册任何事件监听器
- 没有使用任何[ReadableStream]对象

## 如果服务器允许, 会响应这个预检请求

一般包括以下几个头部字段

- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Max-Age: 在此时间内浏览器无需为同一请求再次发送预检请求
- Access-Control-Allow-Credentials
- Access-Control-Expose-Headers
