# 参数

- ECMAScript不关心参数的数据类型, 也不关心参数的个数

## arguments对象

- arguments对象是一个可以在函数内部访问的参数数组 
  - `arguments[0]`: 第一个参数
  - `arguments[1]`: 第二个参数
- `arguments.length`返回参数个数
- arguments参数不反映参数的默认值

## default parameters 

默认参数初始值可以是原始值，对象，函数返回值

```javascript
function multiply(a, b = 1) {

}
```

[destructured]() parameters with default value assignment

