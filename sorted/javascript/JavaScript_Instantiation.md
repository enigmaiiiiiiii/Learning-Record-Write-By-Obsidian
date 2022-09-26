# 实例

- 创建一个类的多个实例, 意味着创建了多个**关联同一个**`[[prototype]]`的对象
- 同一个类的实例, 是共享同一个`[[prototype]]`对象 

## constructor

- `constructor`是prototype中一个属性公有且不可枚举的属性
- `constructor`指向创建该对象的构造函数

```js
function Foo() {}
Foo.prototype.constructor === Foo; // true
var a = new Foo(); 
a.constructor === Foo; // false
```

