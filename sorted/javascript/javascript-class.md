# JavaScript - Class

> Essentially is a special [function](javascript-function.md)

* [Define a class](#define-a-class)
* [Contructor](#contructor)
* [Method](#method)
* [Static Method](#static-method)
* [Field(Property)](#field(property))
* [Inheritance](#inheritance)
* [Abstract class](#abstract-class)
* [ECMA built-in type can be inherited](#ecma-built-in-type-can-be-inherited)
* [Local Class](#local-class)

## Define A Class

Property added directly to class will be added to [prototype](javascript-three-prototype-concepts.md#prototype-property)

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

- at `1`, property on `this` will add to each instance
- at `2`, `locate()` method will be added on [prototype](javascript-prototype.md)

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

[Constructor function](javascript-constructor.md)

## Method

[Prototype](javascript-prototype.md) method

[Generator Method](javascript-generator-function.md)

## Static Method

> similar concepts in [java](java-method.md#static-method) and [c++](c++-static-member.md)

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
    x = 0;  // public field
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

> ECMAScript DOES NOT provide abstract class syntax

- You can use `new.target` in target abstract class to determine whether the class can be created

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

## Anonymouse Class

```js
const p = new class {
  locate() {
    console.log('here is the location')
  }
}
```

## Class Expression

```ts
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
const rec = new Rectangle(10, 20);
```
