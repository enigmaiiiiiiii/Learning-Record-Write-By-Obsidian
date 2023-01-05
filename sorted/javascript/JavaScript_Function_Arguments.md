# 参数

- [feature](#feature)
- [Arguments Object](#arguments对象)
- [default parameters](#default-parameters)

## Feature

- ECMAScript不关心参数的数据类型, 也不关心参数的个数

## Arguments Object

- `arguments` Object 是一个可以在函数内部访问的参数数组
  - `arguments[0]`: 第一个参数
  - `arguments[1]`: 第二个参数
- `arguments.length`返回参数个数
- `arguments` Object 不反映参数的默认值

## Default Parameters

```javascript
function multiply(a, b = 1) {
}
```

- 默认参数初始值可以是原始值，对象，函数返回值

对象解构来分配对象参数类型的默认属性

- 数组元素默认值参数

```js
function filledArray([x = 1, y = 2] = []) {
    return x + y;
}
```

- 对象属性默认值参数

```js
function filledObject({x = 1, y = 2} = {}) {
    return x + y;
}
```

## Rest Parameters

[Rest Parameters](JavaScript_Function_Rest_Parameters.md)
