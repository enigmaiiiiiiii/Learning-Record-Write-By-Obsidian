# Promise.resolve()

`Promise.resolve(value)`

parameters

- value: 包装为promise的值
  - can be a `promise`
  - or a thenable

return value

- a resolved promise

Examples

```js
Promise.resolve("Success").then(
  (value) => {
    console.log(value);
  }
  (reason) => {
    // 
  }
)
```
