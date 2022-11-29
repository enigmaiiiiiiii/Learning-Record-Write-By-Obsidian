# this对象

- this绑定的对象是由函数的调用方式决定的

## 闭包中的this

- 内部函数没有使用[箭头函数], 则this绑定在到执行函数的上下文

## new中的this

- 通过[构造函数](JavaScript_Constructor.md)创建的对象

## this隐式绑定的对象

- this绑定到调用函数的对象 

> 如obj.foo()绑定到obj

```js
function foo() {console.log(this.a);}
var obj = {a: 2, foo: foo};

obj.foo(); // this绑定到obj
```
## this显示绑定的对象

- 通过call(), bind(), apply()方法可以显式设置this绑定的对象
- 在[回调函数](callback_function.md)中会失去参数中绑定的this, 因为[参数](JavaScript_Function_Arguments.md)传递是一种赋值 
- 所以在回调函数中使用this的方法，可以回调函数之前使用bind()返回新函数

***

使用空对象null绑定this可以忽略this

> !然而在浏览器中，this绑定到全局对象window

```js
var bar = foo.bind(null, 2);
bar(3);
```

- 使用object.create(null)创建的一个更空的对象
  - 不会创建Object.prototype

```js
var o0 = Object.create(null);
var bar = foo.bind(o0, 2);
```

## 默认绑定

- 严格模式下是undifined

## 判断this的绑定对象的步骤

1. 判断是否是new绑定: var bar = new foo(); 
2. 判断是否是显示绑定: var bar = foo.call(obj);
3. 判断是否是隐式绑定: var bar = obj.foo();
4. 判断是否是默认绑定: var bar = foo();

## 关于this

- 在方法中this表示该方法所属的[对象](javascript_object.md)
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