# Javascript - Global Object

* [what's this](#what's-this)
* [null-prototype object](#create-null-prototype-object)
* [Instance Method](#instance-method)
* [Static Method](#static-method)
  * [Object.keys()](#object.keys())
  * [Object.getOwnPropertyNames()](#object.getownpropertynames())
  * [Object.values(obj)](#object.values(obj))
  * [Object.is(val1, val2)](#object.is(val1,-val2))
  * [Object.defineProperty()](#object.defineproperty())
  * [Object.defineProperties()](#object.defineproperties())
  * [Object.freeze(obj)](#object.freeze(obj))
  * [Object.create()](#object.create())
  * [Object.getPrototypeOf()](#object.getprototypeof())
  * [Object.assign()](#object.assign())
  * [Object.hasOwn()](#object.hasown())

## what's this

- almost all object is an instance of Object
- the only object that don't inherit from Object.prototype is [null prototype](#create-null-prototype-object)
- Only Object.prototype is **immutable prototype** in core JS

## create null-prototype object

```js
const obj = Object.create(null);
const obj2 = {prototype: null}
```

## Instance Method

- `toString()`: return a string representing the object
- `valueOf()`: return the primitive value of the specified object
- `isPrototypeOf()`
- `create()`
  - create a new object, using an existing object as the [prototype](javascript-prototype.md) of the newly created object

## Static Method

### Object.keys()

`Object.keys(obj)`

- return a array, containing the names of [all enumerable properties](javascript-property-descriptor) of the given object
  - [**enumerable**](javascript-property.md) property
  - string-keyed property names
  - directly defined on the object, also called [own properties](javascript-property.md#own-property)

### Object.getOwnPropertyNames()

`Object.getOwnPropertyNames(obj)`

- return an array of all properties directly on obj 

> including [non-enumerable](javascript-property-descriptor.md) properties

### Object.values(obj)

`Object.values(obj)`

- return an **array** containing the given object's own [enumerable](javascript-property-descriptor.md) string-keyed property values

### Object.is(val1, val2)

`Object.is(val1, val2)`

- `NaN === NaN` is `false` ,but `Object.is(NaN, NaN)` is `true`

```js
Object.is([], [])  // false
```

### Object.defineProperty()

`Object.defineProperty(obj, prop, descriptor)`

- defines a new **single** property directly on an object

parameter

- `obj`: the object on which to define the property
- `prop`: the name or Symbol of the property to be defined or modified
- `descriptor`: the descriptor for the property being defined or modified

return

- the object that was passed to the function, with the property added or modified

### Object.defineProperties()

`Object.defineProperties(obj, props)`

parameter

- `obj`: the object on which to define or modify properties
- `props`: an object whose own enumerable property names correspond to the properties to be defined or modified

### Object.freeze(obj)

`Object.freeze(obj)`

- prevent modification of existing property attributes and values

```js
const obj = {
  prop: 42
};
Object.freeze(obj);
obj.prop = 33;  // silently fail, throw error in strict mode
console.log(obj.prop);  // 42
```

### Object.create()

`Object.create(proto[, propertiesObject])`

- create a new object with the specified prototype object and properties
- using an existing object as the [prototype](javascript-prototype.md) of the newly created object
- this is an approach to create object from another object without know its type

parameter

- `proto`: the prototype of the newly-created object, mostly an internal `[[Prototype]]` get from [`Object.getPrototypeOf()`](#objectgetprototypeof)
- `properties`:
  - specify properties to be add to newly-created object
  - same as the second parameter of [`Object.defineProperties()`](#objectdefineproperties)

### Object.getPrototypeOf()

`Object.getPrototypeOf(obj)`

- return the [internal prototype](javascript-three-prototype-concepts.md#internal-prototype) of the specified object

### Object.assign()

`Object.assign(target, ...sources)`

- copy enumberable [own properties](javascript-property.md#own-property) from one or more source objects

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);  // { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);  // true
```

### Object.hasOwn()

`Object.hasOwn(obj, prop)`

- return true, if the `obj` has the `prop` property directly
- return false, if the `prop` is inherited or does not exist

### Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor(obj, prop)`

parameters

- `obj` the object to look for property
- `prop` the name or symbol of the property whose description is to be retrieved

return

- a [property descriptor](javascript-property-descriptor.md) of given property

