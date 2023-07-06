# Javascript - Inheritance

* [Basic](#basic)
* [use prototype to implement Inheritance](#use-prototype-to-implement-inheritance)
* [Class Inheritance](#class-inheritance)
* [how to determine the inheritance relationship](#how-to-determine-the-inheritance-relationship)

## Basic

- javascript inheritance is based on `[[prototype]]`

## use prototype implement Inheritance

> or the essence of inheritance in javascript

subclass's [`prototype property`](javascript-three-prototype-concepts.md#prototype-property) point to super class's `prototype`

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

- `Object.create()` is to create a new object, and the new object's `[[prototype]]` point to the parameter

## Class Inheritance

- use **extends** keyword to inherit any object that has `[[construct]]` and `[[prototype]]` properties

> which means that you can **inherit ordinary functions**

inherit class

```js
class Vehicle{}
class Bus extends Vehicle{}
let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true
```

inherit function

```js
function Person() {}
class Engineer extends Person {}
let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true
```

use super represent super class

- only can be used in **subclass**'s
  - constructor
  - static method
- cannot be used individually
- `this` cannot appear before `super`

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

## how to determine the inheritance relationship

operator `instanceof`

- if an instance's [prototype](javascript-prototype.md) have a reference to the constructor's prototype, then the instance is the constructor's instance

method `Object.isPrototypeOf()`

- [Object.isPrototypeof()](javascript-global-object.md)

