# 原型

- JavaScript的对象有都一个特殊的**prototype**内置属性, 称为对象的**原型**
- 通过`new`关键字创建的对象, 会继承prototype中的属性和方法
- prototype属性的值是一个**对象**

## 访问对象的原型

> 官方没有提供直接访问对象原型的方法

- ~~JavaScript中通过`[[prototype]]`访问~~
- 浏览器和`nodejs`提供了`__proto__`属性

## prototype属性对属性访问的影响

**使用**一个**对象属性** 或 调用一个**对象方法**时

1. 触发[get]操作, get操作第一步是检查**对象本身**是否有这个属性
2. 当属性不在当前对象中，需要从**原型属性**中递归查找

**添加**一个**prototype链上层已存在的foo属性**时 , 存在三种情况:

1. 数据属性的[writable](javascript_Property.md)特性没有被标记为只读, 当前对象添加一个新的foo属性，屏蔽上层属性
2. writable被标记为只读，不会发生屏蔽
3. 上层foo属性是一个[setter]属性, 会调用setter， 不会发生屏蔽

## 原型链

- 对象内部的属性查找链, 当前对象的prototype是第一个搜索范围
- prototype链的顶层指向内置[Object.prototype](javascript_object.md)
- Object.prototype包含JavaScript中许多通用功能，如toString(), valueOf()

## 模拟类的函数

```javascript
function Foo() {

}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype;
```

调用new Foo()创建a时，将a的Prototype链接到Foo.prototype所指对象

- javascript中并没有创建类的多个实例的机制，只能创建多个对象，他们[Prototype链](javascript_原型链.md)关联同一个对象