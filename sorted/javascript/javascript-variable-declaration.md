# 变量

- javascript是动态类型语言，不需要指定变量将包含什么数据类型

## var语句

- var声明的作用域: **函数内部**或**全局作用域**
- 用var声明的变量被添加到[变量对象](javascript-context.md)的属性，属性值不能更改，属性不能被delete

变量的**声明**被提升, **定义**不会被提升

Illustrate this with following code

```js
function foo() {
    console.log(age);
    var age = 26;
}
console.log(age);  // undifined
```

*ECMAScript运行时把以上代码看作:*

```js
function foo() {
    var age;
    console.log(age);
    age = 26;
}
```

- 在[模块](javascript-module.md)中变量被声明在模块中，而不是作为属性添加到全局对象中
- 无论出现在何处，都会在执行任何代码之前进行处理

- ~~对应名称被添加到[global environment record]()上的`[[varname]]`, `[[varname]]`可以区分**全局变量**和**变量对象属性**~~

```javascript
console.log(x);  // undifined
var x = 1;
```

> 浏览器中var定义全局变量和函数都会成为window对象的属性和方法

## let声明

> ECMAScript6后新增关键字

- let变量在块内部，即`{}`之间
- let与var的最大区别在于作用域
- let不能单独作为块主体

```javascript
if (true) let a = 1; // 语法错误
```

## const声明

- const变量必须在声明时赋值
- 将[原始值](javascript-variable-copy-and-reference.md)赋值个const变量，就不能改变const变量值
- 可以改变const对象的属性, 无法重新为const对象赋值
- const数组可以更改，不能重新赋值

## 无标识符变量

- 非严格模式中被当作[全局对象]变量
- 严格模式下导致ReferenceError

## 语句和声明

声明关键字:

- let, const, function, function*, async function, async function*, class, export, import

大多数流程控制结构只能使用语句, 所以:

```javascript
if (condition) {
    // statement1...
    let l = 0;  // 错误
} else {
    // statement2
    var i = 0; // 是一个语句
}
```
