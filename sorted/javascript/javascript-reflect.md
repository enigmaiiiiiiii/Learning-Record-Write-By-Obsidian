# JavaScript Reflect

## What it is

- contains static methods that mirror the existing global object methods
- is not **a constructor**, cannot be used with `new` operator
- provides static functions which are same as [proxy handler methods](javascript-proxy.md#handler-methods)

major use is to provide **default forwarding behavior** in [Proxy handler]()

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

## feature

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