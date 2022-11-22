# new关键字

- 用于创建一个用户定义的对象类型或具有**constructor(构造函数)**的内置对象的实例

## 使用new来调用函数时发生了什么？

1. 创建一个空的JavaScript对象, 即`obj={}`
2. 空对象添加`prototype`属性, 将这个属性**连接**至构造函数的prototype
> 连接的含义: obj.prototype.prototype = super.prototype
3. 将这个空对象赋值给函数内部的this, 即`this = obj`
4. 如果没有返回其它对象, new表达式返回步骤1创建的对象


```js
var o = new Foo();
```

```js
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);
````
