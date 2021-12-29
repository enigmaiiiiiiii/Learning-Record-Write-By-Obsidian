## 请求报文

- 请求行
  - 方法字段,包括GET,POST,HEAD,PUT,DELETE
  - URL字段
  - HTTP版本字段
 - 首部行
   - Host
   - Connection
     - close表示不要使用持续连接,要求发送外被请求对象后关闭这条连接
   - User-agent
     - 发送请求的浏览器类型
   - Accept-language
     - 客户想要得到的语言
- entity body
  - 方法为POST时，内容为用户提供的表单
     
```http
GET /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent:Mozilla/5.0
Accept-language:fr

entity body
```