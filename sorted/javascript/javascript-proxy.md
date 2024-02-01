# Javascript Proxy

## What Is This

- An object to create a wrapper for another object

## Why Proxy

- Intercept and redefined fundamental operations for target object

## Take A Look

```js
const target = {
  name: "hello",
  age: 99
}
const handler = {
  get: function(target, prop, receiver) {
    if (prop === "name") {
      return "world";
    }
    return Reflect.get(...arguments)
  },
  set: function(target, prop, value, receiver) {
    if (prop === "name") {
      console.log("name is not allowed to change");
      return false;
    }
    return Reflect.set(...arguments)
  }
};

const proxyTarget = new Proxy(target, handler)
console.log(proxyTarget.name)
```

- `name`: property of original object will return `hello`
- `name`: property of proxy object will return `world`

## Create A Proxy

Constructor

`new Proxy(target, handler)`

- `target`: target object to wrap with proxy
- `handler`:
  - an object whose properties are [handler methods](#handler-methods)
  - there is a list of you can define

what handler looks like

```js
const handler = {
  get: function(target, prop, receiver) {
    // ...
  },
  set: function(target, prop, value, receiver) {
    // ...
  }
}
```

## Handler Methods

> sometimes called traps

which means the function signature has already defined

- `get(target, prop, receiver)`
  - `target`
  - `prop`: represent property key
  - `receiver`:
- `set(target, prop, value, receiver)`
- has
- deleteProperty
- apply
- construct
- getOwnPropertyDescriptor
- defineProperty
- getPrototypeOf
- setPrototypeOf
- enumerate
- ownKeys
- preventExtensions
- isExtensible
- getOwnPropertyNames
- apply
- construct

