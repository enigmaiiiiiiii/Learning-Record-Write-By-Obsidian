# Socket.IO

- not a WebSocket implementation
- Socket.IO adds **additional** metadata to each packet
  - **WebSocket Client** 不能直接连接到**Socket.IO Server**
  - **Socket.IO Client** 也不能直接连接到单一的**WebSocket Server**

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

- io.on('eventName', callback);
- socket.on('eventName', callback);
- socket.emit('eventName', message);

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
- 将单个共享连接从逻辑上分割成多个频道