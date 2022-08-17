# 响应报文

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

- 以上报文内容包含一个状态行，6个首部行, 空行，和内容部分
- Content-Type取值在[MIME](Network_MIME.md)中限制

## 状态行

格式: `<HttpVersion> <xxx> <status>`

- HttpVersion: http版本
- xxx: 状态码
- status: 原因短语 典型状态

`<xxx> <status>`定义, 参考RFC1945-page26

- 200 0K：请求成功，信息在返回的响应报文中
- 201 Created: 请求成功
- 202 Accepted: 请求成功
- 204 No Content
- 301 Moved Permanently：请求的对象已经被永久转移了，新的URL定义在响应报 文的Location:首部行中。客户软件将自动获取新的URL。
- 302 Moved Temporarily：请求的对象已经被临时转移了
- 304 Not Modified：请求的对象未被修改，服务器返回此状态码时，不会返回响应报文的内容
- 400 Bad Request: 一个通用差错代码，指示该请求不能被服务器理解
- 403 Forbidden: 请求被服务器拒绝
- 404 Not Found: 请求的文档不在服务器上
- 500 Internal Server Error:
- 501 Not Implemented: 服务器不支持请求的功能，无法完成请求。
- 502 Bad Gateway: 服务器作为网关或代理，从上游服务器收到了无效的响应。
- 503 Service Unavailable: 服务器目前无法使用（由于超载或停机维护）。
- 505 HTTP Version Not Supported: 服务器不支持请求的HTTP版本。

> 服务器响应为302时，有些浏览器会发送空的请求

状态码分类 
<table>
<tr>
<td>1xx</td>
<td>信息性状态码</td>
<td>Not used, but reserved for future use</td>
</tr>
<tr>
<td>2xx</td>
<td>成功状态码</td>
<td>The action was successfully received, understood, and accepted</td>
</tr>
<tr>
<td>3xx</td>
<td>重定向状态码</td>
<td>further action must be taken in order to complete the request</td>
</tr>
<tr>
<td>4xx</td>
<td>客户端错误</td>
<td>服务器无法处理请求</td>
</tr>
<tr>
<td>5xx</td>
<td>服务器错误</td>
<td>服务器处理请求出错</td>
</tr>
</table>

## 6个首部行

- Connection
- Date
- Server
- Last-Modified
- Content-Length
- Content-Type: 报文主体对象类型，比如Context-Type: text/html

## 空行`<CR><LF>`

- `<CR>`: 回车, 对应ASCII码为13
- `<LF>`: 换行, 对应ASCII码为10

## entity body

- 包含请求内容

