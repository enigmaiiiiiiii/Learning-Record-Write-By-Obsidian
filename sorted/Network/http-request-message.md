# Http - Request Message

## typecal request message

```http
GET /api/data HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36
Accept: application/json
Accept-Language: en-US,en;q=0.9
Referer: https://www.example.com/
Connection: keep-alive

<content>
```
> when request method is post, the content is the form provided by user

## request line

`GET /api/data HTTP/1.1` request line

- first line of request message, including
  - [request method](http-request-method.md)
  - [URI](computer-network-uri.md)
  - request version

request method, including GET, POST, HEAD, PUT, DELETE

- [method detail](http-request-method.md)

## Header Fields

[request-header](http-request-header.md)

## Empty Line

represent `<CR><LF>`

- `<CR>`
- `<LF>`

## request body

- when request method is GET, request body is empty
- when request method is POST, request body is the [form](html-element-form.md) provided by user

