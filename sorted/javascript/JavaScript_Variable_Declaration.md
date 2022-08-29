# 变量声明

- javascript是动态类型语言，不需要指定变量将包含什么数据类型

## var

- 声明一个变量，作用域为函数内部

>浏览器中var定义全局变量和函数都会成为window对象的属性和方法

## let声明

- ECMAScript6后新增关键字

> let与var的最大区别在于作用域
> let变量在块内部，即`{}`之间

## 关键字const

- const变量必须在声明时赋值
- 将[原始值](javascript_variable_copy_and_reference.md)赋值个const变量，就不能改变const变量值
- 可以改变const对象的属性, 无法重新为const对象赋值
- const数组可以更改，不能重新赋值