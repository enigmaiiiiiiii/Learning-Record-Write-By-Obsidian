# csurf

#csrf #middleware #express

- csrf protection middleware 
- [take a look](#take-a-look)
- [原理](#原理)
- [`csurf()` function](#csurf-function)
- [Object Argument Options](#object-argument-options)


## take a look

```js
import csurf from 'csurf'
const csrfProtection = csurf({ cookie: true })
app.get("/", csrfProtection, (req, res) => {
  res.send(
    `<form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <button type="submit">Submit</button>
    </form>`
  );
});

// catch csrf dedected
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);
  res.status(403);
  res.send('CSRF attack detected');
})
```

## principle

1. csurf set a cookies secret on response

- 浏览器**首次向服务器发送请求**, 服务器会在浏览器cookie中设置一个token secret
- 通过[`csurf([optoins])`](#csurf-function)函数的options参数可以设置服务器向浏览器响应的[cookie](/sorted/Network/Http_Cookie.md)的属性, 如字段名, 路径, 过期时间等

```http
set-cookie: _csrf=token-secret; Path=/; HttpOnly
```

2. 通过[表单](form)字段发送一个包含变化的token的请求

- **每次请求**都会生成一个新的token, 作为表单隐藏字段的值

```html
<form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="${req.csrfToken()}">
  <button type="submit">Submit</button>
</form>
```

## `csurf()` function

- Create A Middleware For Csrf Protection

```js
const csrfProtection = csurf({ cookie: true })
```

## Object Argument Options

`options` object take following properties:

参数 option 对象有以下属性:

1. cookie: 是否将 **token secret** 保存在cookie, 或者保存在req.session中, **默认为false**

- when set to true
  - must use [cookie-parser](NodeJS_Package_Cheatsheets.md) before csurf
  - [a secret cookies is set](/sorted/Network/Http_Cookie.md#set-cookie-to-client) on response
- cookies 包含的 key
  - key
  - path
  - signed
  - secure
  - maxAge
  - httpOnly
  - sameSite
  - domain

2. ignareMethods

3. sesionKey