# 函数表达式

## 定义函数表达式

- 对于函数声明: `function func_name(){...}`, 函数名`func_name`就是函数表达式
- 使用匿名函数定义函数表达式: `let func_name = function(){...}`

```js
const square = function(number) {
    return number * number;
}
var x = square(4);
```

## 匿名函数表达式

[arrow function](javascript-function.md#arrow-function)

## 函数表达式可以作为参数传递

```js
function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function(x) {
    return x * x * x;
}
map(f, [0, 1, 2, 5, 10]);
```

