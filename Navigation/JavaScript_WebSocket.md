# WebSocket

## Standard WebSocket

- WebSocket is a web standard technology
- makes it possible to open a **two-way interactive** communication session between the user's **browser** and a **server**
- 很多libraries为使用websocket技术的提供了方便的接口

并不直接使用标准的 WebSocket Object 和相关 Interface

原始的对象和接口

- WebSocket Object
  - instance properties
    -`WebSocket.binaryType`
    -`WbeSOcket.bufferedAmount`
    -`WebSocket.extensions`
    -`WebSocket.protocol`
    -`WebSocket.readState`
  - Instance methods
    - `WebSocket.close()`
    - `WebSocket.send()`
- WebSocket Interface

  - `WebSocket`
  - `CloseEvent`
  - `MessageEvent`

## use library ws to make a demonstrate

create websocket server

```js
import WebSocket from 'ws';
const server = new WebSocket.server({port: '8080'});

server.on('connection', socket => {
})
```

## WebSocket library

[ws]()

[socket.io](NodeJS_SocketIO.md)
