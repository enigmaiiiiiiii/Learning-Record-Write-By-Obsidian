# 请求报文

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

## 请求行内容

1. 请求方法,包括GET,POST,HEAD,PUT,DELETE
    - get将请求的数据附在url后
    - post将提交的数据放在报文主题(entity body)中
2. URL字段
3. HTTP版本字段
  
 ## 首部行
 
- Host
- Connection
  - close表示不要使用持续连接,要求发送外被请求对象后关闭这条连接
- User-agent
  - 发送请求的浏览器类型
- Accept-language
  - 客户想要得到的语言
    
# 空行`<CR><LF>`     

## entity body
  - 方法为POST时，内容为用户提供的表单
     
```http
GET /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent:Mozilla/5.0
Accept-language:fr

entity body
```