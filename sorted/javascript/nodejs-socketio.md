# Socket.IO

- not a WebSocket implementation
- Socket.IO adds **additional** metadata to each packet
  - **WebSocket Client** can't connect to **Socket.IO Server** directly
  - **Socket.IO Client** also can't connect to a single **WebSocket Server** directly

> [plain WebSocket](javascript-websocket.md) library [ws](), [μwebsocket]()

## feature

- Automatic reconnection
- HTTP long-polling fallback
- Packet bufferring

## Getting Started

[Getting Started](nodejs-socketio-getting-started.md)

## API

## Event

event is a **string** pass to

- `io.on('eventName', callback);`
- `socket.on('eventName', callback);`
- `socket.emit('eventName', message);`

## Buit-in Events

socket

- connect
- connect_error
- disconnect

Room Event

- create-room
- delete-room
- join-room
- leave-room

## Namespace

- a virtual channel
- make single connection logically split into multiple channels