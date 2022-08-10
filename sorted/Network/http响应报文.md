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

## 状态行

1. http版本
2. 状态码和原因短语, 典型状态
    - 200 0K：请求成功，信息在返回的响应报文中。 
    - 301 Moved Permanently：请求的对象已经被永久转移了，新的URL定义在响应报 文的Location:首部行中。客户软件将自动获取新的URL。
    - 400 Bad Request: 一个通用差错代码，指示该请求不能被服务器理解。 
    - 404 Not Found:被请求的文档不在服务器上。 
    - 505 HTTP Version Not Supported:服务器不支持请求报文使用的HTTP协议版本
- 状态码分类
<table>
<tr>
<td>1xx</td>
<td>信息性状态码</td>
<td>接收的请求正在处理</td>
</tr>
<tr>
<td>2xx</td>
<td>成功状态码</td>
<td>处理完毕</td>
</tr>
<tr>
<td>3xx</td>
<td>重定向状态码</td>
<td>需要进行附加操作已完成请求</td>
</tr>
<tr>
<td>4xx</td>
<td>客户端错误状态码</td>
<td>服务器无法处理请求</td>
</tr>
<tr>
<td>5xx</td>
<td>服务器错误状态码</td>
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

## entity body

- 包含请求内容

