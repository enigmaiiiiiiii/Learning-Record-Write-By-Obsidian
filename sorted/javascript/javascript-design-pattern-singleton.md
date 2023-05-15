# Javascript Design Pattern - Singleton

* [Summarize](#summarize)
* [implement with regular object](#implement-with-regular-object)
* [implement with class](#implement-with-class)

## Summarize

- [Design Pattern of Singleton](design-pattern-singleton.md)
- in many languages, we [need a class](#use-class-to-implement-singleton)
- in javascript, we can achieve this by [use regular object](#use-regular-object)

## use scenarios

- database connections
- logging
- configuration

## implement with regular object

`counter.js`

```js
let count = 0;
const counter = {
  increment() {
    return ++count;
  }
  decrement() {
    return --count;
  }
}
Object.freeze(counter);
export { counter };
```

## implement with class

`counter.js`

```js
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance")
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
```
