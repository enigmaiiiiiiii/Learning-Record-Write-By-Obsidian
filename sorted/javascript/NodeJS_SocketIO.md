# Socket.IO

- not a WebSocket implementation
- Socket.IO adds **additional** metadata to each packet
  - **WebSocket Client** 不能直接连接到**Socket.IO Server**
  - **Socket.IO Client** 也不能直接连接到单一的**WebSocket Server**

> [plain WebSocket](JavaScript_WebSocket.md) library [ws](), [μwebsocket]()

## feature

- Automatic reconnection
- HTTP long-polling fallback
- Packet bufferring

## init server

io.on(event, callback)

## create connection

## send message to client

## send message to specific client

## send message with

## disconnection

