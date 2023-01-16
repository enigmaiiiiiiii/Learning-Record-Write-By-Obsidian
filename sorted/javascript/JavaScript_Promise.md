# JavaScript Promise

- [Foundation](#foundation)
- [Introduction](#introduction)
- [three common mistake](#three-common-mistake)
- [Thenables](#thenables)

## Foundation

[Something About Promise](JavaScript_Promise_Foundation.md)

## Introduction

- Promise is an Object representing the eventual completion or failure of an **asynchronous operation**

Promise 是为了满足 这样的**异步**操作:

一个普遍需求是: 有时需要多个异步操作一个接一个的执行, 而后一个操作需要前一个操作的结果, success or false

without promise lead to the **callback pyramid of doom**

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.llg(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```
use promise

```js
const promise = doSomething();
const promise2 = promise.then(successCalback, failureCallback);
```

- `promise2` is not just represent the result of `promise`
- but also represent the result of `successCallback` or `failureCallback` passed in

with promise, we can accomplish

```js
doSomething()
  .then(function(result) {
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Gott the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

## three common mistake

1. forget return a result for next `then`

- 如果下一个[then()](JavaScript_Promise_Then.md)的callback需要用到前一个Promise的结果, 必须要return

> if next `then` callback use the result as a parameter

```js
doSomething()
  .then((url) => {
    // should reture a value, but didn't
    fetch(url);
  })
  .then(result) => {
    // result is undefined
  }
```

- `result` will be undefined

2. nest unnecessaryily

```js
doSomething()
  .then(function(result) {
    // unneccessary nest
    return doSomethingElse(result)
      .then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourThing());
  .catch(failureCallback);
```

3. forget to terminate chains with `catch`

```js
doSomething()
  .then(function(result) {
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Gott the final result: ${finalResult}`);
  });
  // forget to add catch
```

**a good practice**

```js
doSomething()
  .then(function(result) {
    return doSomethingElse(result);
  })
  .then((newResult) => doThirdThing(newResult)
  .then(() => doFourthThing())
  .catch((error) => console.error(error));
```

## Promise And Old Callback API

old api like `setTimeout()` doesn't have success and failure callback

```js
setTimeout(() => someFunction(), 1000);
```

wrap in a promise to catch the state

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(10000)
  .then(() => saySomething)
  .catch(failureCallback)
```

## when the callback in the promise will be called

```js
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback, 1000);
  }
}
```

- callback won't be invoked before the completion of current event loop 
- callback will be invoked in the order they are added

## Thenables

- all promies-like objects are thenables
- thenables object implement `then()` method
- `then()` has two **callback** arguments
  - one for fulfilled
  - one for rejected
## feature

- promise callbacks are handled as a [microtask](JavaScript_Tasks_And_Microtasks.md#microtasks)

> whereas `setTimeout()` callbacks are handled as a task queues

```js
const promise = new Promise((resolve, reject) => {
  console.log("Promise callback");
  resolve();
}).then((result) => {
  console.log("Promise callback (.then)");
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);
```

```
Promise callback
Promise (pending) Promise { <pending> }
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

