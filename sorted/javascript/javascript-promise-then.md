# JavaScript Promise - then()

* [Features](#features)
* [Syntax](#syntax)
* [Parameters](#parameters)
* [return value](#return-value)
* [Example](#example)

## Features

when will be called

- **when promise instance [state](javascript-promise-foundation.md#states-of-promise) changing**, the **function** pass to `then()` argument will be called

return a new **Promise Instance**

## Syntax

`promiseInstance.then(onFulfilled, onRejected)`

## Parameters

`onFulfilled`: `(value) => void`

- A **callback** called when the `promiseInstance` is [resolved](javascript-promise-foundation.md#states-of-promise)
- argument of this callback `value` represent the resolved value of `promiseInstance`

```js
const p1 = newPromise((resolve, reject) => {
  resolve("Success!");
})

p1.then(
  (successMessage) => {
    console.log('Yay! ' + successMessage);
  },
  (errorMessage) => {
    console.log('Oops! ' + errorMessage);
  }
)
```

- `successMessage` is `"success!"`
- if `onFulfilled` is not a function, it will be replaced by `((x) => x)`

`onRejected`: `(reason: any) => void`

- A function to be called when the `promiseInstance` is **rejected** or an **error** is thrown
- if `onRejected` is not a function, will be replaced by `((x) => { throw x; })`

## return value

return value is **depend on handler function**

if return a promise called `p`, **if the handler function:**

- Return a value, `p` is a promise wrapping this value, and the state is [`fulfilled`](javascript-promise-foundation.md#states-of-promise).
- Do not return any value, `p` is a promise wrapping `undefined`, and the state is [`fulfilled`](javascript-promise-foundation.md#states-of-promise).
- Throw an exception, `p` is a promise wrapping this exception, and the state is `rejected`.
- Return an already [fulfilled promise], `p` is a promise wrapping the value from **the returned promise**, and the state is `fulfilled` or `rejected`.
- Return an already [rejected promise], `p` is a promise wrapping the value from **the returned promise**, and the state is `rejected`.
- Return a pending promise, `p` is also in the pending state, and the final state is the same as the returned promise.

## Example

```js
const flag = 1;
const p1 = new Promise((resolve, reject) => {
  if(flag === 1) {
    resolve("success!");
  } else {
    reject("error!");
  }
});

p1.then(
    (successMessage) => {
        console.log("Yay! " + successMessage);
    },
    (errorMessage) => {
        console.error("Error: " + errorMessage);
    }
);
```

