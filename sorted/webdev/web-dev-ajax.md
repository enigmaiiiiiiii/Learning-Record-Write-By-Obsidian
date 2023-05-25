# AJAX

## What is this

- Asynchronous JavaScript and XML
- mainly build with [XMLHttpRequest](javascript-bom-xmlhttprequest.md) object
- use number of existing technologies together, including
  - HTML or XHTML
  - CSS
  - JavaScript
  - DOM
  - XML
  - XSLT
  - XMLHttpRequest Object
  - JSON
- web application are able to make quick, incremental updates to the user interface without reloading the entire browser page

1. 发送请求

- 发送请求
  - open(method, url, async): 
    - method: 请求方法, get, post, head
    - url: 请求地址
    - async: 是否异步
  - send(string): 发送请求, string为请求体

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "example.txt", true);
xhr.send();
```

2. 接收到响应后做什么

```js
httpRequest.onreadystatechange = nameOfFunction;
```