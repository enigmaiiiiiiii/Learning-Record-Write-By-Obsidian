# then()

## Feature

**when promise instance [state](javascript-promise-foundation.md#state-of-promise) changing**

the **function** pass to then() argument will be called

return a new **Promise Instance**

- promiseInstance.then(onFulfilled, onRejected)

## onFulfilled

a function to be called when the `promiseInstance` is resolved

this callback has one parameter, represent the [return value](javascript-promise.md#always-return-a-result) of previous promise

- `successMessage` is `"success!"`

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

if `onFulfilled` is not a function, 内部被替代为`((x) => x)`

## onRejected

- a function to be called when the `promiseInstance` is **rejected** or an **error** is thrown
- if `onRejected` is not a function, 内部被替代为`((x) => { throw x; })`

## return value

return value is **depend on handler function**

return a promise called `p`, **if the handler function:**

- 返回一个值, p是包装这个值的promise, state is `fulfilled`
- 不返回任何值, p是包装`undefined`的promise, state is `fulfilled`
- 抛出一个异常, p是包装这个异常的promise, state is `rejected`
- return a already fulfilled promise, p是包装**这个返回的promise中的值**的promise, state is `fulfilled` or `rejected`
- return a already rejected promise, p是包装**这个返回的promise中的值**的promise, state is `rejected`
- return a pending promise, p是状态也是pending, 且终态与返回的promise相同

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

