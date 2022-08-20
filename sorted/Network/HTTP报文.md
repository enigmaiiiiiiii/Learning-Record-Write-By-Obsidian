# HTTP报文格式

- 编码字符集ISO-8859-1

<table>
  <tr>
    <td>报文首部</td>
  </tr>
  <tr>
    <td>空行(CR+LF)</td>
  </tr>
  <tr>
    <td>报文主体</td>
  </tr>
</table>

> CRLF: 表示回车符(CR)和换行符(LF)
>> 回车符(return): `\r`, CR, 13, 1010
>> 换行符(next line): `\n`, LF, 10, 1001

[请求报文](http请求报文.md): 首行为请求行
	 
[响应报文](http响应报文.md): 首行为响应行

[通用首部字段](http通用首部字段.md)

[实体首部字段](http实体首部字段.md)

[实体编码](Http_Content_encode.md)

## 首部字段(消息头)

- 以key: value的形式存在于报文首部中
  - key为首部字段
  - value为字段的值

以响应报文为例

```http
HTTp/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A simple webpage</title>
</head>
<body>
  <h1>Simple HTML5 webpage</h1>
  <p>Hello, world!</p>
</body>
</html>

```

> 首部字段为
>> Content-Type
>> Content-Length
>> Connection
>> Cache-Control
>> Content-Language
>> Date
>> ETag
>> Server
>> Strict-Transport-security
>> X-Content-Type-Options
>> X-Frame-Options
>> X-XSS-Protection
>> Vary
>> Age

## 首部参考

Location

- 将客户端导向某个资源地址
