# Typescript - Class

* [Constructor](#constructor)
* [method](#method)
* [getters/setters](#getters/setters)
* [readonly](#readonly)
* [index signature](#index-signature)
* [inheritance](#inheritance)
* [Member Visibility](#member-visibility)
* [Generic Classes](#generic-classes)
* [about `this` in javascript](#about-`this`-in-javascript)
* [arrow function](#arrow-function)
* [this as method parameter](#this-as-method-parameter)
* [this as parameter type annotation](#this-as-parameter-type-annotation)
* [Class Expressions](#class-expressions)
* [Abstract Classes And Members](#abstract-classes-and-members)

## Constructor

```ts
class GoodGreeter {

    name: string;

    constructor() {
        this.name = "hello";
    }
}
```

## method

```ts
class Greeter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello() {
        return "hello" + this.name;
    }
}
```

## getters/setters

[why getter/setter](object-oriented.md#why-gettersetter)

> it is fine to expose public fields if **no additional logic** during the get/set operation

```ts
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let c = new C();
c.length = 10;
console.log(c.length); // 10
```

> only `get` no `set`, property is auto readonly

~~getter/setter can be [overload](typescript-function.md)~~

- size typescript 4.3, it is possible to have accessors with different types for getting and setting 

```ts
class Thing() {
    _size = 0;
    get size(): number {
        return this._size;
    }
    set size(value: string | number | boolean) {
        this._size = num;
    }
}
```

- in this example, getter return type is `number`, setter parameter type is `string | number | boolean`

## readonly

- can't not be changed outside the constructor

```ts
class Greeter {
    readonly name: string;
}
```

## index signature

```ts
class MyClass {
    [index: number]: string;
    check(index: number) {
        return this[index] as boolean;
    }

}
```

## inheritance

implements statement

> implements is only to check whether class has all the members of the **interface**

```ts
interface Pingable {
    ping(): void;
}
class Sonar implements Pingable {
    ping() {
        console.log("ping");
    }
}
```

extends statemant

- subclass has all the members of the **base class**
- subclass can define its own members


```ts
```

fields Declarations

- in sub class `declare` to define a more specific type
- won't effect on runtime
- do not have effect on the generated JavaScript code
- only ensures the types are correct

```ts
class AnimalHouse {
  resident: Animal;
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;
}
```

Inheriting built-in types

- according to ECMAScript6 standard, adjust the prototype chain of `Error`, `Array`
- In ECMAScript5 doesn't ensure `new.target`, so inherit from `Error`, `Array`, constructor may return `undefined`

## Member Visibility

- `public`: default, can be accessed from anywhere
- `protected`: only be accessed inside **class self** or **sub class**
- `private`: only be accessed inside **class self**

> access control only limit to **syntax check**, that is to say, JavaScript code can still access any member

you expose member from derived class which is protected in base class

```ts
class Base {
    protected m = 10;
}
class Derived extends Base {
    m = 15;  // public
}
const d = new Derived();
console.log(d.m);
```

## Generic Classes

```ts
class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}
```

## about `this` in javascript

[`this` in javascript](javascript-this.md)


## arrow function

- a function that loses its `this` context

```ts
class MyClass {
    name = "MyClass";
    getName = () =>  { return this.name; }
}
const c = new MyClass();
const g = c.getName;
console.log(g()); // "MyClass"
```

- guaranteed to be correct at runtime, even for code not checked with typescript
- use more memory: Because each class instance has its own copy of the [arrow function](javascript-arrow-function.md)
- cannot use `super.getName` in derived class, because entry in [prototype](javascript-prototype.md) chain to fetch the base class method from

## this as method parameter

- an initial parameter named `this` has special meaning in typescript
- `this` parameter typescript use to check who call the method
- erased during compilation

```ts
class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
        return this.name;
    }
}
const c = new MyClass();
c.getName();  // c is asserted correctly as type of this
const g = c.getName;
console.log(g()); // undefined
```

trade-off

- may incorrectly use above code in javascript without realizing it
- every class shared the same function definition, rather than each instance has its own function definition
- can be called via `super`

## this as parameter type annotation

```ts
class Box{
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}
```

- different with `other: Box`, `other: this` in derived class will be interpreted as `other: SubBox` 

## Class Expressions

```ts
const someClass = class {
    constructor(public name: string) {}
}
const m = new someClass("hello");
```

## Abstract Classes And Members

feature

- abstract class cannot be instantiated directly
- abstract method doesn't have implementation
