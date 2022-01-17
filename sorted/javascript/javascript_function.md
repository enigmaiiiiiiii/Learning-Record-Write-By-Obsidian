# 函数

- 没有重载
- 函数声明

函数声明会在代码被执行之前读取到执行上下文

  ```javascript
  function funcName(arg0, arg1, arg2) {
  }
  ```
  
- 函数表达式  

  ```javascript
  let funcName = function(arg0, arg1,arg2) {
  }
  ```

- 立即调用的函数表达式(IIFE)

可以模拟块级作用域, ECMAScript6之后，用IIFE模拟块级作用域就没那么必要了
ECMAScript6使用块级作用域变量可以实现同样的效果

```javascript
(function() {
  // 作用域
})();
```

[参数](javascript_function_arguments.md)

[函数表达式](javascript_function_expression.md)

[函数属性和方法](javascript_function_property_and_method.md)
