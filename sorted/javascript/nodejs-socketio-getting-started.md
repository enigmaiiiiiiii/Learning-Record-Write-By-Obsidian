# NodeJS SocketIO Getting Started

- [init server](#init-server)
- [client connect server and send message](#client-connect-server-and-send-message)
- [Server Send Message](#server-send-message)
- [Receive Message](#receive-message)
- [Join Room](#join-room)
- [Send Message To Specific Channel](#send-message-to-specific-channel)
- [Disconnection](#disconnection)


## init server

standalone server

```js
import { Server } from 'socket.io';
const io = new Server();
```

handle CORS

```js
import { Server } from 'socket.io';

const io = new Server(3000, {
  cors: {
    origin: 'http://localhost:8080',
  },
});
```

## client connect server and send message

get socket for full-duplex communication

```js
import io from 'socket.io-client';

const socket = io('http://localhost:8080');
socket.emit('event-name', 'hello world');
```

send **any number of arguments**

```js
socket.emit("event-name", "hello", "world", {x: 1, y: 2});
```

## Server Send Message

braodcast message

- send message to all other sockets except sender

```js
io.on('connection', (socket) => {
  socket.broadcast.emit('event-name', message);
});
```

## Receive Message

server side

```js
io.on('connection', (socket) => {
  socket.on('event-name', (data) => {
    console.log(data);
  });
}
```

- server side **have many different sockets**
- argument data can be:
  - simple argument: `socket.on('event-name', (data) => {})`
  - [rest parameters](javascript-function-rest-parameters.md): `socket.on('event-name', (...data) => {})`
  - multiple arguments correspond to send: `socket.on('event-name', (data1, data2) => {})`

client side

```js
const socket = io('http://localhost:8080');
socket.on('event-name', (data) => {
  console.log(data);
});
```

## Join Room

- room is a child set of broadcast

specific a socket join to a room

- implement on **server side**
- socket handle by callback function `io.on('connection', callback)` will add to room

```js
io.on('connection', (socket) => {
  socket.join('room-name');
})
```

## Send Message To Specific Channel

- send message by specific target is only available on **server side**

channel is a **room** or a **socket.id**

```js
io.on("connection", (socket) => {
  socket.to('channel').emit('event-name', 'hello socket');
})
```

something about client side **socket**

- client socket has no `to()`, `join()`, `leave()` method
- only send message to server
- implement send message only visible for particial client, is to contain target in `socket.emit(event)` parameter;

```js
socket.emit('event-name', 'hello world', 'room-id');
```

## Disconnection

`socket.disconnect()`

