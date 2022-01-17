# 原型

- javascripe的对象有一个prototype的内置属性
- 引用一个对象属性时
  1. 触发[get]操作, get操作第一步时检查对象本身是否有这个属性
  2.  当属性不在当前对象中，需要使用[prototype链](javascript_原型链.md)
- 添加一个prototype链上层已存在的foo属性时 , 存在三种情况: 
  1. 数据属性的[writable](javascript_Property.md)特性没有被标记为只读, 当前对象添加一个新的foo属性，屏蔽上层属性
  2. writable被标记为只读，不会发生屏蔽
  3. 上层foo属性是一个[setter]属性, 会调用setter， 不会发生屏蔽

## 模拟类的函数

```javascript
function Foo() {

}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype;
```

调用new Foo()创建a时，将a的Prototype链接到Foo.prototype所指对象

- javascript中并没有创建类的多个实例的机制，只能创建多个对象，他们[Prototype链](javascript_原型链.md)关联同一个对象