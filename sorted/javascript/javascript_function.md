# 函数

- **没有重载**
- 是一个**function对象**

[定义函数](#定义函数)
[闭包](#闭包)
[参数对象](#参数对象)
[函数表达式](#函数表达式)
[函数的属性和方法](#函数的属性和方法)
[箭头函数](#arrow-function)
[函数执行过程](#函数执行过程)

## 定义函数

[定义函数](JavaScript_Function_Definition.md)

## 参数

[参数](JavaScript_Function_Arguments.md)

## 函数表达式

[函数表达式](JavaScript_Function_Expression.md)

## 闭包

[闭包](JavaScript_Closures.md)

## 函数的属性和方法

[函数属性和方法](javascript_function_property_and_method.md)

## Arrow Function

[箭头函数](JavaScript_Arrow_Function_Expressions.md)

## 函数执行过程

```javascript
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
let result = compare(5, 10);
```

在定义compare()函数时

- 会为它创建[作用域链]，**预装**载**全局变量**对象，并保存在内部的`[[Scope]]`中。

在调用这个函数时

- 会创建相应的执行上下文，然后通过复制函数的`[[Scope]]`来创建其作用域链
- 接着会创建函数的活动对象（用作变量对象）并将其推入作用域链的前端

> 在这个例子中，这意味着compare()函数执行上下文的作用域链中有两个变量对象：局部变量对象和全局变量对象。
> 作用域链其实是一个包含指针的列表，每个指针分别指向一个变量对象，但物理上并不会包含相应的对象。

函数内部的代码在访问变量时

- 会使用给定的名称从作用域链中查找变量
- 函数执行完毕后，局部活动对象会被销毁，内存中就只剩下全局作用域
