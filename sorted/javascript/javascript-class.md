# JavaScript - Class

> essentially is a special [function](javascript-function.md)

- [定义一个class](#定义一个class)
- [构造方法](#构造方法)
- [method](#method)
- [静态方法](#静态方法)
- [Field(Property)](#fieldproperty)
- [继承](#继承)
- [抽象基类](#抽象基类)
- [可以继承ECMA内置类型](#可以继承ecma内置类型)
- [局部Class](#局部class)
- [javascript中的class](#javascript中的class)
- [new和class有什么关系](#new和class有什么关系)

## define a class

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

- at `1`, this上的所有内容都会被添加到每个实例上
- at `2`, locate()方法会被添加到[prototype](javascript-prototype.md)上

## Contructor

- `constructor()` is a special method for creating and initializing an object created with a class
- when use `new Rectangle()` will call the `constructor()` method
- no default return value
- but can specify a return value, return an object

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

## Method

[prototype](javascript-prototype.md) method

[Generator Method](javascript-generator-function.md)

## Static Method

[java](java-method.md)和[c++](c++-static-member.md)中拥有相似的概念

- Only Can be called by class name

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

- public property

```js
class Point {
    x = 0;  // 公有字段
}
```

- private property, with prefix `#`

```js
class Point {
    #x = 0;  // private field
}
```

## Inheritance

[Class Inheritance](javascript-inheritance.md)

## Abstract class

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

## ECMA built-in type can be inherited

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

## Local Class

- Define a class with scope stricted

```js
let Rectangle = class {
    contructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```
