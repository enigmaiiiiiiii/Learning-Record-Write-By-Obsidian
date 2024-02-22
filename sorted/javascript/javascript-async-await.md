# JavaScript - Async/Await

- [await](#await)
- [async function](#async-function)

## What Are They

- A syntax that wrapping [Promise](javascript-promise.md)

## await

`const a = await expression`: where `expression` is a promise object

- use to unwrap a promise Object
- `await` **only can be used in** [async function](#async-function)
- await pauses the [async function](#async-function)) until the promise is [settled](javascript-promise-foundation.md#states-of-promise)
- await make [async function](#async-function) look like synchronous
- purpose of await/async is to simplify the using of promise

## Async Function

- A function that can contain await expression inside its body
- contains 0 or more await expressions
- async function with 0 await expression is synchronously execute

Code between the first line of the async function until the first await expression, the code is executed synchronously.


```js
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000)
    })
}

async function fx() {
  let total = 0;
  for (let i = 0; i < 10000000000; i++) {
    total += i;
  }
  console.log(`circle finish, total: ${total}`);
  const result = await resolveAfter2Seconds("fulfilled a promise");
  console.log(result);
}

fx();
console.log('after calling');
```

- output order:
  - 1. circle finish, total: 49999999......
  - 2. after calling
  - 3. fulfilled a promise

**Always return a promise**

- non-promise return value will be wrapped into a promise

```js
async function foo() {
    return 1;
}
// equivalent function
function foo() {
    return Promise.resolve(1);
}
```

- Asynchronously executed async function

```js
async function foo() {
    await 1;
}
// equivalent function
async function foo() {
    return Promise.resolve(1).then(() => undefined);
}
```

