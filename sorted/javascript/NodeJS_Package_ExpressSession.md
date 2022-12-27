# Express-Session

## take a look

```js
app.use(
  session({
    secret: "supersecret difficult to guess string",
    cookie: {},
    resave: false,
    saveUninitialized: false
  })
)

app.post("/choose-name", (req, res) => {
  req.session.name = req.body.name;
  res.send(`<p>Thank you</p><a href="/">Back home</a>`)
});

app.post("/logout", (req, res) => {
  req.session.destroy((req, res) => {
    res.redirect("/");
  });
})
app.listen(3000);
```

## function session()

`session(options)`

options object has the following properties:

secret: **required option**

- 用于加密 session ID 的字符串

cookie

- 设置存有 session ID 的 cookie 的属性

genid

```js
app.use(session({
  genid: function(req) {
    return 123456;
  }
  secret: 'keyboard'
}))
```

## Set Session

`req.session.name = req.body.name;`

## Get Session

```js
name = req.session.name
res.send(`
  <h1>Welcome, ${name}</h1>
`)
```
