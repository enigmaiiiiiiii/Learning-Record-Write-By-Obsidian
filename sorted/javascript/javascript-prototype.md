# Prototype

- every JavaScript object has a special **prototype** built-in property
- when use `new` create a new object, object will will link to prototype
- value of `prototype` is an **object**

## access to prototype

> official doesn't provide a way to access prototype

- ~~In JavaScript use `[[prototype]]` to access~~
- browser and `nodejs` provide `__proto__` property to access prototype

## prototype affect on property access

when **read** to a **object property** or call a **object method**

1. trigger [get] operation, first check if **object itself** has this property
2. when property not found in current object, search in prototype recursively

**add** a property that **already exist in top prototype chain**, there are three cases:

1. if data property's [writable](javascript-property.md#property-descriptor) is not marked as readonly, current object add a new foo property, will shadow the upper foo property
2. writable is marked as readonly, will not shadow the upper foo property
3. upper foo property is [setter], will call setter， will not shadow the upper foo property

## Prototype Chain

- the property search chain in object, current object's prototype is the first search scope
- prototype chain top layer is point to [Object.prototype](javascript-object.md)
- there are many common functions in Object.prototype, such as toString(), valueOf()

## use function to simulate class

```javascript
function Foo() {

}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype;
```

use `new Foo()` create `a`，will link `a`'s prototype to `Foo.prototype`

- there no mechanism to create multiple instances of a class in javascript, only can create multiple objects, their [prototype chain]() link to same object
