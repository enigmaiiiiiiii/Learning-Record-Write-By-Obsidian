# Http - Response Message

- [Example response](#example-response)
- [Status Line](#status-line)
- [6 Header Lines](#6-header-lines)
- [Empty Line `<CR><LF>`](#empty-line-crlf)
- [entity body](#entity-body)

## Example response

```http
HTTP/1.1 200 OK
Connection: close
Date: Tue, 18 Aug 2000 15:11:03 GMT
Server: Apache/2.2.3 (CentOS)
Last-Modified: Tue, 18 Aug 2000 15:13:03 GMT
Content-Length: 6821
Content-Type: text/html

entity body
```

- message in above example include
  - One Status Line
  - 6 Header Lines
  - One empty Line
  - Entity body
- Content-Type is restricted in [MIME](computer-network-mime-type.md)

## Status Line

Format: `<HttpVersion> <xxx> <status>`

- HttpVersion: http version
- xxx: status code
- status: status code description

official definition of `<xxx> <status>`, refer to [RFC1945-page26](https://tools.ietf.org/html/rfc1945#page-26)

- 200 0K：请求成功，信息在返回的响应报文中
- 201 Created: 请求成功
- 202 Accepted: 请求成功
- 204 No Content
- 301 Moved Permanently：请求的对象已经被永久转移了，新的URL定义在响应报 文的Location:首部行中。客户软件将自动获取新的URL。
- 302 Moved Temporarily：请求的对象已经被临时转移了
- 304 Not Modified：请求的对象未被修改，服务器返回此状态码时，不会返回响应报文的内容
- 400 Bad Request: 一个通用差错代码，指示该请求不能被服务器理解
- 401 Unauthorized: 未授权
- 403 Forbidden: 请求被服务器拒绝
- 404 Not Found: 请求的文档不在服务器上
- 500 Internal Server Error
- 501 Not Implemented: 服务器不支持请求的功能，无法完成请求。
- 502 Bad Gateway: 服务器作为网关或代理，从上游服务器收到了无效的响应。
- 503 Service Unavailable: 服务器目前无法使用（由于超载或停机维护）。
- 505 HTTP Version Not Supported: 服务器不支持请求的HTTP版本。

> 服务器响应为302时，有些浏览器会发送空的请求

- 101 Switching Protocols: 服务器将遵从客户的请求转换到另外一种协议

status code category

| category | description       | meaning                                                        |
| :------: | :---------------- | :------------------------------------------------------------- |
|   1xx    | status code       | Not used, but reserved for future use                          |
|   2xx    | success code      | The action was successfully received, understood, and accepted |
|   3xx    | redirect code     | further action must be taken in order to complete the request  |
|   4xx    | client error code | server can't handle the request                                |
|   5xx    | server error code | server raised error when handle the request                    |

## 6 Header Lines

- Connection
- Date
- Server
- Last-Modified
- Content-Length
- Content-Type: 报文主体对象类型，比如Context-Type: text/html

## Empty Line `<CR><LF>`

- `<CR>`: Carriage Return, ASCII code is 13
- `<LF>`: Line Feed, ASCII code is 10

## entity body

- load the response content
