# Async/Await

- [await](#await)
- [async function](#async-function)

## await

`const a = await expression`: expression: 一个promise对象

- use to unwrap(拆开) a promise对象
- await**只能用于**async function中
- await pauses the [async function](#async-function)) until the promise is [settled](javascript-promise.md#state-of-promise)
- await make [async function](#async-function) look like synchronous
- purpose of await/async is to简化了promise的使用

## async function

- 一个可以使用await的函数
- 包含0个或多个await表达式

**从async函数的第一行code到第一个await表达式之间的代码是同步执行的**

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

**always return a promise**

- 不包含await的async funciton是同步执行的

```js
async function foo() {
    return 1;
}
// 等价函数
function foo() {
    return Promise.resolve(1);
}
```

- 异步执行的`async function`:

```js
async function foo() {
    await 1;
}
// 等价函数
async function foo() {
    return Promise.resolve(1).then(() => udndefined);
}
```

