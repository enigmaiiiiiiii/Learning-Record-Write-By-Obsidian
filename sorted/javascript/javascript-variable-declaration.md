# JavaScript - Variable

## var statement

- Scope of variables declared with `var`: **Within a function** or **in the global scope**
- Variables declared with `var` are added as properties to the [variable object](javascript-context.md), and once set, their values cannot be changed, and the properties cannot be deleted.

The **declaration** of a variable is hoisted, but the **definition** is not hoisted.

Illustrate this with following code

```js
function foo() {
    console.log(age);
    var age = 26;
}
console.log(age);  // undifined
```

*ECMAScript will treat above code as:*

```js
function foo() {
    var age;
    console.log(age);
    age = 26;
}
```

- Scope of variable declared in [module]() is **within the module** not added as properties to the global object
- where ever it appears, it will be processed before any code is executed

- ~coresponding name is added to the global environment record's `[[varname]]`, `[[varname]]` can distinguish **global variable** and **variable object property**~

```javascript
console.log(x);  // undifined
var x = 1;
```

> 浏览器中var定义全局变量和函数都会成为window对象的属性和方法

## let declaration

> ECMAScript6后新增关键字

- let变量在块内部，即`{}`之间
- let与var的最大区别在于作用域
- let不能单独作为块主体

```javascript
if (true) let a = 1; // 语法错误
```

## const declaration

- const变量必须在声明时赋值
- 将[原始值](javascript-variable-copy-and-reference.md)赋值个const变量，就不能改变const变量值
- 可以改变const对象的属性, 无法重新为const对象赋值
- const数组可以更改，不能重新赋值

## Non-identifier Names

- in non-strict mode, treated as a global object variable
- in strict mode, ReferenceError is thrown

## Statement And Declaration

Declaration keywords:

- let, const, function, function*, async function, async function*, class, export, import

Most control flow structure only accept statement, so:

```javascript
if (condition) {
    // statement1...
    let l = 0;  // error
} else {
    // statement2
    var i = 0; // a statement
}
```
