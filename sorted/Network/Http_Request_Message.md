# 请求报文

## Example request

> 方法为POST时，内容为用户提供的表单

```http
GET /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent:Mozilla/5.0
Accept-language:fr

entity body
```

## 请求行

- 请求报文第一行, 包括请求方法、[URI](Network_URI.md)、请求版本
- `<请求方法><space><请求路径(URI)><space><HTTP版本><CRLF>`

请求方法,包括GET,POST,HEAD,PUT,DELETE

- get将请求的数据附在url后
- post将提交的数据放在报文主体(entity body)中

## 请求头字段

> 请求头也有叫 "消息头", "首部行" 的

[请求头字段](Http_Request_Header.md)


## 空行`<CR><LF>`

- `<CR>`
- `<LF>`
