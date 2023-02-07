# Cookie

- [feature](#feature)
- [工作原理](#工作原理)
- [set cookie to client](#set-cookie-to-client)
- [cookies in request](#cookies-in-request)
- [cookies properties](#cookies-properties)
- [access to cookies by bowser console](#access-to-cookies-by-bowser-console)
- [security problim](#security-problim)
- [会话cookie和持久cookie](#会话cookie和持久cookie)

## feature

- 保存在**客户端**中
- 只保存字符串类型数据
- 单个cookie大小限制为4KB
- 每个**主机名**都有对应的cookie
- **automatically** sent by browser to server
- when cookie HttpOnly property is true, client-side javascript cannot access to cookie

![cookie.svg](cookie.svg)

## 工作原理

- 用户首次访问服务器时, 服务器会在响应报文中设置一个cookie, 通过**Set-Cookie**[首部字段](http-response-message.md)来设置
- 再次访问时, 浏览器会将cookie发送给服务器, 请求报文会携带**Cookie**[首部字段](http-request-message.md)字段

## set cookie to client

- 服务器通过**Set-Cookie**[首部字段](http-response-message.md)来设置cookie

by nodejs express

```js
import express from `express`;
const app = express();
app.get('/', (req, res) => {
  res.cookie('sky', 'blue');
  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  res.send('cookie set'); // cookie set
});
app.listen(3000);
```

响应报文中包含`Set-Cookie`相关的字段

```http
Set-Cookie: name=value; Max-Age=900000; Path=/; HttpOnly
Set-Cookie: sky=blue; Path=/
```

再次访问服务器时, 浏览器会将Cookie发送给服务器, Cookie字段looks like

```http
Cookie: sky=blue; name=value
```

## cookies in request

```http
cookies: key1=value1; key2=value2; key3=value
```

## cookies properties

- key
- value
- Domain
- Path
- Expires: Expiry date of cookie in [GMT]()
- Secure: marked the cookies to be used with HTTPS only
- HttpOnly
  - true: cookie can only be accessed by the web server
  - false: cookie can be accessed by client side script
- SameSite
  - Strict:
  - Lax: default value
  - None:

> Max-Age: convenient to set expire time

---

SameSite:

- value is Strict, 阻止浏览器所有跨站点发送cookie, 虽然可以阻止csrf攻击, 但是也会导致cookie无法发送到常规链接, 如Github登录的用户无法访问其它发布在github上的链接
- value is Lax

## access to cookies by bowser console

only can access to cookies which flag **`HttpOnly` is false**

`document.cookies`

## security problim

- [csrf](web-csrf.md) attack

[best example](https://github.com/learnwebcode/youtube-cookies-and-more/tree/main/01-cookies)

## 会话cookie和持久cookie

- 会话cookie
  - 一种临时cookie
  - 退出浏览器时失效
- 持久cookie
  - 一种长期有效的cookie
  - 通过设置过期时间来实现
- 会话cookie和持久cookie的过期时间唯一区别
  - 会话cookie
    - 设置`Max-Age`为0
    - 设置`Expires`为过去的时间来实现
  - 持久cookie
    - 设置`Max-Age`为正数
    - 设置`Expires`为未来的时间