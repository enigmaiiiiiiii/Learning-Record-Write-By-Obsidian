# 定义函数

## 三种定义方式 

- 函数定义会在代码被执行之前读取到执行上下文

方式1

```javascript
function funcName(arg0, arg1, arg2) {
    // fucntion body
}
```

方式2

```javascript
let funcName = function(arg0, arg1,arg2) {
    // fucntion body
}
```

方式3

```javascript
let funcName = new Function("arg0", "arg1", "function body") {
}
```

- 均可通过funcName()完成函数调用

## 立即调用的函数表达式(IIFE)

- 可以模拟块级作用域, ECMAScript6之后，用IIFE模拟块级[作用域](javascript_上下文与作用域.md)就没那么必要了
- ECMAScript6使用块级作用域变量可以实现同样的效果

```javascript
(function() {
  // 作用域
})();
```