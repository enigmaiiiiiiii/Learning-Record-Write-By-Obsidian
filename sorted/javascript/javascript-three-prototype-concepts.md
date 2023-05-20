# Javascript - Three Prototype Concepts

* [Summary](#summary)
* [Internal Prototype](#internal-prototype)
* [Prototype Property](#prototype-property)
* [__proto__ Property](#proto-property)
* [Common Feature](#common-feature)

## Summary

here are 3 concepts of prototype

- `prototype` property
- internal property, which refer to as `[[prototype]]`
- `__proto__` is non-standard property of internal prototype

## Internal Prototype

- every JavaScript object has a special **prototype** built-in property
- `Object.getPrototypeOf(obj)` to get the internal prototype of obj

## Prototype Property

- named "prototype"
- **only exists on constructor function**

```js
function Box() {
  console.log("Box function called")
}

const boxInstance = new Box();
Box.prototype.tmp = "tmp";
boxInstance.prototype.newProp = "newProp";  // TypeError: fx.prototype is undefined
```

> when access to prototype on instance, error thrown

- for constructor function `Box()`, `Box.prototype` is **not** internal prototype of `Box`

```js
console.log(Object.getPrototypeOf(Box) === Box.prototype);  // false
console.log(Object.getPrototypeOf(Box) === Function.prototype);  // true
```

## __proto__ Property

- __proto__ property is a non-standard property
- for access to internel prototype of an object
- for constructor function `Box()` and its instance `boxInstance`
  - `box.__proto__ === Box.prototype` is true, cause `boxInstance` create by [new operator](javascript-operator-new.md)
  - `box.__proto__.prop = "tmp"` is allowed and same as `Box.prototype.prop = "tmp"`

```js
function Box() {
  //...
}
const boxInstance = new Box();
console.log(Object.getPrototypeOf(boxInstance) === Box.prototype);  // true
console.log(boxInstance.__proto__ === Box.prototype);  // true
```

## Common Feature

1. value of prototype is an object
2. has its own [internal prototype](#internal-prototype)

```js
function Box() {
  console.log("this is a box");
}
console.log(Object.getPrototypeOf(Box) === Function.prototype);  // true
```
