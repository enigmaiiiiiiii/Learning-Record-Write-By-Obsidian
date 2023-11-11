# Http - Response Message

* [Example response](#example-response)
* [Status Line](#status-line)
* [Header Lines ](#header-lines-)
* [Empty Line `<CR><LF>`](#empty-line-`<cr><lf>`)
* [entity body](#entity-body)

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

- 200 0K：request success and response data is included in the response message
- 201 Created: request success, and a new resource has been created
- 202 Accepted: request accepted for processing, but the processing has not been completed
- 204 No Content
- 301 Moved Permanently：request resource is permanently moved to another location, new location is defined in Location header line of response message, client application will auto get the new url
- 302 Moved Temporarily：request resource is temporarily moved to another location
- 304 Not Modified:
- 400 Bad Request: General error code, indicate that the request is invalid
- 401 Unauthorized: request need authentication
- 403 Forbidden: request is refused by server
- 404 Not Found: request resource is not found
- 500 Internal Server Error
- 501 Not Implemented: 服务器不支持请求的功能，无法完成请求。
- 502 Bad Gateway: server as gateway or proxy, receive invalid response from upstream server
- 503 Service Unavailable: 服务器目前无法使用（由于超载或停机维护）。
- 505 HTTP Version Not Supported: 服务器不支持请求的HTTP版本。

> when server response status 302, some browser will send empty request

- 101 Switching Protocols: 服务器将遵从客户的请求转换到另外一种协议

status code category

| category | description       | meaning                                                        |
| :------: | :---------------- | :------------------------------------------------------------- |
|   1xx    | status code       | Not used, but reserved for future use                          |
|   2xx    | success code      | The action was successfully received, understood, and accepted |
|   3xx    | redirect code     | further action must be taken in order to complete the request  |
|   4xx    | client error code | server can't handle the request                                |
|   5xx    | server error code | server raised error when handle the request                    |

## Header Lines 

6 Common Header Lines

- `Connection`
- `Date`
- `Server`
- `Last-Modified`
- `Content-Length`
- `Content-Type`: response body content type，for example `Context-Type: text/html`

## Empty Line `<CR><LF>`

- `<CR>`: Carriage Return, ASCII code is 13
- `<LF>`: Line Feed, ASCII code is 10

## Entity Body

- load the response content

