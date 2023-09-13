# Request Header

## Typical Request Header

```http
GET /api/data HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36
Accept: application/json
Accept-Language: en-US,en;q=0.9
Referer: https://www.example.com/
Connection: keep-alive
```

## referer

- allow server to identify the source of request
- when **clicks on a link** or makes a request to server, the browser will add `Referer` header to the request

## Host

- specify the domain name of the server which client want to connect
- this is essential when a single web server hosts multiple websites

## Connection

`Connection: close`:

`Connection: Keep-Alive`: represent client wish to keep connection open, default in HTTP/1.1

- if `Connection: Keep-Alive`, then add `Keep-Alive` header
- `Keep-Alive: timeout=5, max=1000`
  - timeout: spare time of connection keep
  - max: max number of request before server close connection

```
GET / HTTP/1.1
Host: www.example.com
Connection: Keep-Alive
Keep-Alive: timeout=5, max=1000
```

`Connection: Upgrade`: represent client wish to upgrade to another protocol, like HTTP/2.0, HTTPS, [WebSocket](javascript-websocket.md)

- if `Connection: Upgrade`, then add `Upgrade` header
  - `Upgrade: websocket`: represent client wish to upgrade to WebSocket protocol

```
GET / HTTP/1.1
Host: www.example.com
Connection: Upgrade
upgrade: HTTP/2.0, HTTPS, WebSocket
```

- if server decide to upgrade, the `101` [response status code]() will be sent
- response send to original using new protocol

## User-agent

- Browser type of request sender

## Accept-language

- Language that client want to get

