# Request Header

## referer

- allow server to identify the source of request
- when **clicks on a link** or makes a request to server, the browser will add `Referer` header to the request

## Host

- 请求资源所在的服务器

## Connection

`Connection: close`: 表示不要使用持续连接,要求发送外被请求对象后关闭这条连接

`Connection: Keep-Alive`: 表示客户端希望保持连接, default in HTTP/1.1

- if `Connection: Keep-Alive`, then add `Keep-Alive` header
- `Keep-Alive: timeout=5, max=1000`
  - timeout: 空闲连接保持时间
  - max: 服务器在关闭连接之前等待的请求数

```
GET / HTTP/1.1
Host: www.example.com
Connection: Keep-Alive
Keep-Alive: timeout=5, max=1000
```

`Connection: Upgrade`: 表示客户端希望升级到另外一种协议, 如HTTP/2.0, HTTPS, [WebSocket]

- if `Connection: Upgrade`, then add `Upgrade` header
- `Upgrade: websocket`: 表示客户端希望升级到WebSocket协议

```
GET / HTTP/1.1
Host: www.example.com
Connection: Upgrade
upgrade: HTTP/2.0, HTTPS, WebSocket
```

- if server decide to upgrade, the `101` [response status code]() will be sent
- response send to original using new protocol

## User-agent

- 发送请求的浏览器类型

## Accept-language

- 客户想要得到的语言

