# JavaScript Reflect

## What It Is

- A [namespace object] contains static methods that mirror the existing global object methods
- Not **a constructor**, cannot be used with `new` operator
- provides static functions which are same as [proxy handler methods](javascript-proxy.md#handler-methods)

major use is to provide **default forwarding behavior** in [Proxy handler](javascript-proxy.md)

```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      return Reflect.deleteProperty(targetObject, property);
    }
  }
);
```

## Features

- some methods are same as method in [Object](), although they do have some subtle differences

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

## Static Methods

`getOwnPropertyDescriptor()`

- returns a [property descriptor](javascript-property-descriptor.md) of the given property

