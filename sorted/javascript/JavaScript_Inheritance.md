# 继承

- 基于原型`[[prototype]]`

## 实现继承 

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

## 确定继承关系

instanceof操作符

- 如果一个实例的[原型链](JavaScript_Prototype.md)上出想过相应的构造函数, 则返回`true`

isPrototypeOf

- [Object对象中的isPrototypeof()](JavaScript_Object_Object.md)

