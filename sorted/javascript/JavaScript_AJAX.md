# AJAX

- Asynchronous JavaScript and XML
- 使用了XMLHttpRequest对象构建
- 在不刷新页面的情况下, 在后台与服务器交换数据

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