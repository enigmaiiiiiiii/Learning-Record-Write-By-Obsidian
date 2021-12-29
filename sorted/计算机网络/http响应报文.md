## 响应报文

- 一个状态行
  - 200 0K：请求成功，信息在返回的响应报文中。 
  - 301 Moved Permanently：请求的对象已经被永久转移了，新的URL定义在响应报 文的Location:首部行中。客户软件将自动获取新的URL。
  -  400 Bad Request: 一个通用差错代码，指示该请求不能被服务器理解。 
  -  404 Not Found:被请求的文档不在服务器上。 
  -  505 HTTP Version Not Supported:服务器不支持请求报文使用的HTTP协议版本
- 6个首部行
  - Connection
  - Date
  - Server
  - Last-Modified
  - Content-Length
  - Content-Type
- entity body
  - 包含请求内容

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