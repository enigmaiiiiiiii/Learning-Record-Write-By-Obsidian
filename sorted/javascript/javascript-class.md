# JavaScript 中的 Class

- 本质上是一个特殊[函数](javascript-function.md)

[定义一个class](#定义一个class)
[构造方法](#构造方法)
[method](#method)
[静态方法](#静态方法)
[Field(Property)](#fieldproperty)
[继承](#继承)
[抽象基类](#抽象基类)
[可以继承ECMA内置类型](#可以继承ecma内置类型)
[局部Class](#局部class)
[javascript中的class](#javascript中的class)
[new和class有什么关系](#new和class有什么关系)

## 定义一个class

直接添加在class内部(class{}之间)的属性会添加在prototype上

```js
class Rectangle {
    constructor(height, width) {
        // ------ 1 -------
        this.height = height;
        this.width = width;
        this.locate = () => {
            console.log('on every instance');
        }
    }
    // ------ 2 -------
    locate() {
        console.log('on prototype')
    }
}
let p = new Rectangle();
p.locate();  // on every instance
p.__proto__.locate();  // on prototype
```

- 在1处, this上的所有内容都会被添加到每个实例上
- 在2处, locate()方法会被添加到[prototype](javascript-prototype.md)上

## 构造方法

- `new Rectangle()`会调用`constructor`方法
- 没有指定返回值, 会自动返回`this`
- 但是可以指定返回值, 返回一个对象

## method

原型方法: [prototype](javascript-prototype.md) method

生成器方法: [Generator Method](javascript-generator-function.md)

## 静态方法

[java](java-method.md#静态方法)和[c++](c++-static-member.md)中拥有相似的概念

- 只能使用**类名**调用, 不需要实例化
- 不能使用**实例**调用

```js
class Person {
    constructor() {
    }
    static locate() {
        console.log('class', this);
    }
}
let p = new Person();
Person.locate();
p.locate();  // TypeError: p.locate is not a function
```

## Field(Property)

- 公有字段

```js
class Point {
    x = 0;  // 公有字段
}
```

- 私有字段, 字段前加`#`

```js
class Point {
    #x = 0;  // 私有字段
}
```

## 继承

[继承](javascript-inheritance.md#类的继承)

## 抽象基类

- ECMAScript没有提供抽象基类的语法
- 可以**目标抽象类**的构造函数使用new.target来判断该类是否可以被创建

```js
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be instantiated directly');
        }
    }
}
```

## 可以继承ECMA内置类型

```js
class Super extends Array {
    shuffle() {
        // ...
    }
}
let a = new SuperArray();
console.log(a instanceof Array);  // true
console.log(a instanceof SuperArray);  // true
```

## 局部Class

- 有作用域限制的类

```js
let Rectangle = class {
    contructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle.name); // "Rectangle"
```
## javascript中的class

- javascript中的class是一个语法糖, 本质上是一个函数

## new和class有什么关系

- 运算符new创建一个class实例之前, 必须定义class
- 而new可以用于未定义的函数
