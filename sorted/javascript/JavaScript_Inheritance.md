# 继承

- 基于原型`[[prototype]]`

## 通过prototype属性实现继承

> 或者说javascript中继承的本质

- 子类的`[[prototype]]`指向超类的`[[prototype]]`

```js
function Foo(name) {
    this.name = name;
}
function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
Bar.prototype = Object.create(Foo.prototype);
```
## 类的继承

- 使用extends关键字可以继承任何拥有[[construct]]和[[prototype]]属性的对象, 这意味着可以继承普通函数

继承类

```js
class Vehicle{}
class Bus extends Vehicle{}
let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true
```

继承普通函数

```js
function Person() {}
class Engineer extends Person {}
let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true
```

使用super表示超类

- 仅限于在**派生类**的构造方法, 静态方法中使用
- 不能单独使用
- this不能出现在super之前

```js
class Vehicle {
    constructor() {
        this.type = 'vehicle';
    }
    static identify() {
        console.log('vehicle');
    }
}
class Bus extends Vehicle {
    constructor() {
        super();
        console.log(this.type); // vehicle
    }
    static identify() {
        super.identify();
    }
}
```



## 如何确定继承关系

instanceof操作符

- 如果一个实例的[原型链](JavaScript_Prototype.md)上出想过相应的构造函数, 则返回`true`

isPrototypeOf

- [Object对象中的isPrototypeof()](JavaScript_Object_Object.md)

