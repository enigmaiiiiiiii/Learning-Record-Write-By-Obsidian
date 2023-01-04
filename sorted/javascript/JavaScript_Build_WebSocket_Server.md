# WebSocket Server

## NodeJS ws

simple server

```js
import { WebSocketServer } from 'ws';

const wsServer = new WebSOcketServer({ port: 8080});

wsServer.on('connection', wsSocket => {
  wsSocket.on('message', message => {
    console.log(`Received: ${message}`);
  });
});
```

