# 箭头函数

## 语法

```javascript
(param) => expression

(param, paramN) => {
    // function body
}
```

- param参数, 只有一个参数时, `()`可省略

## Cannot be used as methods

- because arrow function do not have their own `this`

## Cannot be used as constructors

## 特性

- 没有绑定的this, arguments, super, methods对象
