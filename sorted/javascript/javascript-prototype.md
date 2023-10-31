# Prototype

* [here are 3 concepts of prototype](#here-are-3-concepts-of-prototype)
* [Property Access Process](#property-access-process)
* [Prototype Chain](#prototype-chain)
* [Prototype Related Method](#prototype-related-method)
* [function to simulate class](#function-to-simulate-class)

## Here Are 3 Concepts Of Prototype

- [internal prototype](javascript-three-prototype-concepts.md#internal-prototype), also refer to as `[[prototype]]`
- property named ["prototype"](javascript-three-prototype-concepts.md#prototype-property)
- __proto__ property

[confusion of 3 concept](javascript-three-prototype-concepts.md)

## Property Access Process

when **read** to an **object property** or call a **object method**

1. first check if **object own property** has this property, trigger [get] operation,
2. when property not found in current object, search in `[[prototype]]` recursively

**add** a property that **already exist in top prototype chain**, there are three cases:

1. if data property's [writable](javascript-property.md#property-descriptor) is not marked as readonly, current object add a new foo property, will shadow the upper foo property
2. writable is marked as readonly, will not shadow the upper foo property
3. upper foo property is [setter], will call setter， will not shadow the upper foo property

## Prototype Chain

- the property search chain in object, current object's `[[prototype]]` is the first search scope
- prototype chain top layer is point to [Object.prototype](javascript-object.md)
- there are many common functions in `Object.prototype`, such as toString(), valueOf()

## Prototype Related Method

`Object.getPrototypeOf(obj)`

- used to get [internal prototype](javascript-three-prototype-concepts.md#internal-prototype)
- return [internal prototype]() of obj

`Object.create(proto)`

- create a new Object using proto as the prototype of that object

> detail [object.create()](javascript-global-object.md#objectcreate)

## function to simulate class

```javascript
function Foo() {

}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype;
```

use `new Foo()` create `a`，will link `a`'s prototype to `Foo.prototype`

- there no mechanism to create multiple instances of a class in javascript, only can create multiple objects, their [prototype chain]() link to same object
