# CSRF

- CSRF: cross site request forgery 跨站请求伪造
- 欺骗用户的浏览器去访问一个曾经[认证过](SpringSecurity_Authentication.md)的网站, 并执行一些操作; 由于认证过, 网站会认为这个请求是用户自己操作
- 与[xss](Web_XSS.md)不同
  - xss是利用**用户对网站的信任**
  - csrf是利用**网站对用户的信任**

## take a look

- nodejs express framework

localhost:3000/

```js
app.get('/', csrfProtection, (req, res) => {
  req.send(`
    <form action="/transfer-money" method="POST">
      <input type="text" name="amount" placeholder="amount" />
      <input type="text" name="to" placeholder="Send to ...">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <button>Submit</button>
    </form>
  `);
});
```

anotherhost:3000/

```js
app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>Bad Guy SIte Pretending To Be Good Site</h1>
    <form action="http://localhost:3000/transfer-money" method="POST">
      <input name="amount" type="hidden" value="99999" />
      <input name="to" type="hidden" value="Bad Guy"/>
      <button>Click If You Like Puppies</button>
    </form>
   `)
})
```

## CSRF Prevention Cheat Sheet

In short

- framework built-in CSRF protection
- stateful software use [synchronizer token pattern]()
- stateless software use [double submit cookie](#double-submit-cookies)
- **附加**的**深层次**措施中的至少一项
  - [SameSite Cookie Attribute](/sorted/Network/Http_Cookie.md)
  - 实现基于用户交互的保护措施
  - 考虑使用自定义的请求头
  - 使用[origin header](/sorted/Network/Http_Request_Message.md#请求头)
- **任何[XSS]可以击败csrf防御措施**
- 在修改状态的请求中不要使用GET

### SameSite Cookie Attribute

- 是一种通过浏览器来保护用户免受CSRF攻击的方法

### double submit cookies

## demonstrate code

[example](/sorted/Code-Snippet/javascript/Csrf-attack-and-prevention.md)
