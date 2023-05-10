# Javascript Proxy

## Create a proxy

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

## handler methods

> some times called traps

- which means the function type is already defined
  - `get(target, prop, receiver)`
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

## Take A Look

```js
const target = {
  name: "hello",
  age: 30
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
console.log(proxyTarget.message1)
```