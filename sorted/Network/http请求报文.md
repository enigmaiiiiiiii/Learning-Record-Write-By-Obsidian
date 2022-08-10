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

- 请求报文第一行
- 包括方法，请求路径(URI), HTTP版本
  - 请求方法,包括GET,POST,HEAD,PUT,DELETE
  - get将请求的数据附在url后
  - post将提交的数据放在报文主体(entity body)中
  
## 首部行

- Host： 请求资源所在的服务器
- Connection
  - close表示不要使用持续连接,要求发送外被请求对象后关闭这条连接
- User-agent
  - 发送请求的浏览器类型
- Accept-language
  - 客户想要得到的语言
    
## 空行`<CR><LF>`     
