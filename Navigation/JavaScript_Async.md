# JavaScript async

## Promise

- 一个异步操作的对象
- 适用于需要在backgroud执行的任务, 如download image

[Promise](JavaScript_Promise.md)

## await

`const a = await expression`: expression: 一个promise对象

- unwrap(拆开) a promise对象
- await只能用于async function中

```js
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000)
    })
}

async function fx() {
    console.log('calling start');
    const result = await resolveAfter2Seconds("fulfilled a promise");
    console.log(result);
}

fx();
console.log('after calling');
```
output order:

1. calling start
2. after calling
3. fulfilled a promise

## async function

- 一个可以使用await的函数
- 包含0个或多个await表达式

不包含await的async funciton是同步执行的

```js
async function foo() {
    return 1;
}
function foo() {
    return Promise.resolve(1);
}
```

异步执行的`async function`:

```js
async function foo() {
    await 1;
}
async function foo() {
    return Promise.resolve(1).then(() => udndefined);
}
```