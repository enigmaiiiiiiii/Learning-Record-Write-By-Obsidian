# Application

- [app.get()](#appget)
- [app.use()](#appuse)

## app.get()

`app.get('path', callback[, callback])`

- 指定http get请求的地址需要执行的callback函数(函数表达式参数)

arguments

- path
- callback
  - one or more **middleware function**
  - impose **pre-conditions** on a route

## app.use()

`app.use([path,] callback[, callback...])`

- 挂在中间件函数到指定路径

arguments

- path: the path invoke the middleware function
- callback
  - one or more **middleware function**
  - can invoke `next('route')` to bypass the remaining route callback

```js
app.use((req, res, next) => {
  console.log('Time: %d', Date.now());
  next();
});
```

---

example

error-handling middleware

- 必须提供四个参数, 即使next不被使用

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})
```