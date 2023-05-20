# Javascript - this

* [what is "this"](#what-is-this)
* [this in function](#this-in-function)
* [This In Callback](#this-in-callback)
* [This In Closure](#this-in-closure)
* [This In Arrow Function](#this-in-arrow-function)
* [this in constructor](#this-in-constructor)
* [this in class](#this-in-class)
* [this in global context](#this-in-global-context)
* [how to check this bind to what](#how-to-check-this-bind-to-what)
* [globalThis](#globalthis)

## what is "this"

- 在方法中this表示该方法所属的[对象](javascript-object.md)
- 全局函数中, 非严格模式this表示window, 严格模式下this为undifined
- 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用

```javascript
function foo() {
  console.log(this.a);
}
var obj2 = {
  a:42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo();  // 42
```

## this in function

this bind to the object that call the function

```js
function foo() {console.log(this.a);}
var obj = {a: 2, foo: foo};

obj.foo(); // this绑定到obj
```

- this is bind to obj

通过call(), bind(), apply()方法可以设置this绑定的对象

使用空对象null绑定this可以忽略this

```js
var bar = foo.bind(null, 2);
bar(3);
```

`object.create(null)` create a object without prototype

```js
var o0 = Object.create(null);
var bar = foo.bind(o0, 2);
```

## This In Callback

- 在[回调函数](callback-function.md)中会失去参数中绑定的this, 因为[参数](javascript-function-arguments.md)传递是一种赋值
- callback 中的 this 绑定: depends on how the callback is called
- 所以在回调函数中使用this的方法，可以回调函数之前使用bind()返回新函数

## This In Closure

- 内部函数没有使用[箭头函数], 则this绑定在到执行函数的上下文

## This In Arrow Function

- this绑定到 arrow function 定义时的上下文

## this in constructor

- `this` represent the object create by [constructor](javascript-constructor.md)

```js
function C() {
  this.a = 42;
}

let obj = new C();
console.log(o.a); // 42
```

- `this` bind to `obj`

## this in class

example class

```js
class Foo {
  static fx() {
    console.log(this);
  }
}
const f = new Foo();
```

- in static method: this is `Foo`
- static field initialize: this is `Foo`
- in instance method: this is `f`

## this in global context

- in web browser: `this === window` is true
- in node module: `this === undifined` is true


## how to check this bind to what

1. 判断是否是new绑定: var bar = new foo();
2. 判断是否是显示绑定: var bar = foo.call(obj);
3. 判断是否是隐式绑定: var bar = obj.foo();
4. 判断是否是默认绑定: var bar = foo();

## globalThis

globalThis在不同的环境引用不同的对象

- in browser，`globalThis` is `window`
- web worker中，`globalThis` is `self`
- node中，globalThis is `globalThis` or `global`

globalThis保证代码在不同的环境下都能正常运行

可以为globalThis可以为其添加属性

```js
if (typeof globalObject.Intl === 'undefined') {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, 'Intl', {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```
