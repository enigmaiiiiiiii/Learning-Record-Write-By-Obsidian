# 绑定调用对象

apply(), call(), bind()方法都可以用来设置调用函数的[this](JavaScript_this.md)

## function.prototype.apply()

- `func.apply(thisobj, argsArray)`

```js
function add(c, d) {
  return this.a + this.b + c + d;
}
const numbers = [5, 7];
const o = {a: 1, b: 3};
add.apply(o, numbers);
```

- thisobj: 函数中[this]的值

## call()

`call(thisArg, arg1, arg2, ...))`

```js
function add(c, d) {
  return this.a + this.b + c + d;
}
const o = {a: 1, b: 3};
add.call(o, 5, 7);  // 16
```

difference between call() and apply()

- call() accepts an **agruments list**
- apply() accepts a single **array of arguments**

## bind()

`bind(thisArg, arg1, arg2, ...))`

difference between call and bind

- bind返回一个函数object
- call直接调用