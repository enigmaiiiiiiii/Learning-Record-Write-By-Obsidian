# WebSocket

- WebSocket is a [web standard](#websocket-supply-by-dom) technology
- makes it possible to open a **two-way interactive** communication session between the user's **browser** and a **server**
- [很多libraries](#websocket-libraries-list)为使用websocket技术的提供了方便的接口

## princilple

handshake process

- start with client send upgrade HTTP request to server

```http
GET ws://localhost:8080 HTTP/1.1
Origin: http://localhost:8080
Connection: Upgrade
Host: localhost:8080
Upgrade: websocket
```

> if client send a normal HTTP request to a websocket-only server, server will response `status code 426` and message **Upgrade Required**

- if server supports, it agrees to upgrade and send back a response

```http
HTTP/1.1 101 WebSocket Protocol Handshake
Date: Wed, 16 Oct 2013 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket
```

## WebSocket Supply by DOM

[DOM WebSocket](JavaScript_DOM_WebSocket.md)

## Build A WebSocket Server

[WebSocket Server](JavaScript_Build_WebSocket_Server.md)

## WebSocket implementation Library

> use library `ws` to make a demonstrate

create websocket server

```js
import WebSocket from 'ws';
const server = new WebSocket.server({port: '8080'});

server.on('connection', socket => {
  socket.on('message)', message => {
    console.log(`Received: ${message}`);
  });
})
```

## WebSocket Libraries List

[ws](NodeJS_ws.md)

[socket.io](NodeJS_SocketIO.md): easier and more practical library

## difference between WebSocket and http request header `Connection: Keep-Alive`

- `Connection: Keep-Alive` 是为了消灭每次请求都要重新建立TCP连接的开销, client和server之间的交互仍然是基于 request/response 形式
- With `Connection: Keep-Alive` server can not push data to client
- WebSocket is a full-duplex communication protocol, client and server can send data to each other at any time