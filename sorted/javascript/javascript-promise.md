# JavaScript - Promise

* [What It Is](#what-it-is)
* [Foundation](#foundation)
* [Three Common Mistake](#three-common-mistake)
* [Promise And Old Callback API](#promise-and-old-callback-api)
* [when the callback in the promise will be called](#when-the-callback-in-the-promise-will-be-called)
* [Thenables](#thenables)
* [Feature](#features)
* [Misunderstanding](#misunderstanding)

## What It Is

- Promise is an Object representing the eventual completion or failure of an **asynchronous operation**

Promise is for accomplish such **asynchronous** operation:

- A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starting needs previous operation result, success or fail
- without promise lead to the **callback pyramid of doom**

this is a callback pyramid of doom

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.llg(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

with promise

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

## Foundation

[Promise Foundation](javascript-promise-foundation.md)

## Three Common Mistake

1. forget return a result for next `then`

- if next `callback` of [then()](javascript-promise-then.md) need result of previous promise, it is neccessary to return some result in previous promise

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

    return doSomethingElse(result)  
      .then((newResult) => doThirdThing(newResult));  // unnecessary nesting!
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

**A Good Practice**

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

- `callback` won't be invoked before the completion of current event loop 
- `callback` will be invoked in the order they are added

## Thenables

- all promies-like objects are thenables
- thenables object implement `then()` method
- `then()` has two **callback** arguments
  - one for fulfilled
  - one for rejected

## Features

- promise callbacks are handled as a [microtask](javascript-tasks-and-microtasks.md#microtasks)

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

## Misunderstanding

**misunderstanding 1**: callback pass to then() will be called after promise execute

```js
const promise = new Promise((resolve, reject) => {
  console.log('promise log');
})
promise.then(() => {
  console.log('then log');
})
```

- actually if promise didn't change state, **then handler function will not be called**
- so the output is only `promise log`
- add **resolve statement** in promise will lead to `then log` output

**misunderstanding 2**: resolve is called after all task complete in promise

- actually promise is settled immediately after `resolve` or `reject` is called

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise task");
  }, 3000)
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000)
  console.log("promise created");
});

p1.then(
  (msg) => {
    console.log(msg);
    console.log("p1 then");
  }
);
```

output:

```
promise created
p1 resolve
p1 then
promise task
```
