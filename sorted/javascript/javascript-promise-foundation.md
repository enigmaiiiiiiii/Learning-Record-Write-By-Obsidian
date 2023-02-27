# Something About Promise

- [State Of Promise](#state-of-promise)
- [Create Promise](#create-promise)
- [await a promise](#await-a-promise)
- [Static Method](#static-method)
- [Promise Instance method](#promise-instance-method)
- [chained promise](#chained-promise)
- [Promise reject event](#promise-reject-event)

## State Of Promise

- promise对象有三种状态: pending, fulfilled, rejected
  - pending: 初始状态, 待定状态
  - fulfilled: 意味着操作成功完成
  - rejected: 意味着操作失败
- promise的`fulfilled`或`rejected`状态都是`settled`状态
- promise必是三种状态之一

## Create Promise

`new Promise((resolve, reject) => { ... }))`

```js
const success = true;
const fail = false;
const promise = new Promise((resolve, reject) => {
  // do something
  if (success) {
    resolve(value);
  } else if(fail) {
    reject(reject);
  } else {
    throw error;
  }
});
```

promise的返回值

- `resolve(value)`: 将value包装为**Promise对象**
- `reject(reason)`: 将reason包装为**Promise对象**
- `throw error`: 将error包装为的**Promise对象**

## await a promise

- **unwrap** a promise

[await](JavaScript_Async_Await.md)

```js
let value = await promise;
console.log(value);
```

value from `resolve(value)` or `reject(reason)`

## Static Method

Promise.all()

[Promise.resolve()](JavaScript_Promise_Resolve.md)

Promise.reject()

## Promise Instance method

[then()](JavaScript_Promise_Then.md)

[catch()](JavaScript_Promise_Catch.md)

[finally()](JavaScript_Promise_Finally.md)

- 通过`then(), catch(), finally()`方法, 可以将promise对象链接起来

## chained promise

```js
myPromise
  .then(value => {value + ' and bar'})
  .then(value => {value + ' and bar again'})
  .catch(err => console.log(err));
```

[await]()/async的相似过程:

```js
async function foo() {
    try {
        const result = await syncDosomething();
        const newResult = await syncDoSomethingElse(result);
        const finalResult = await syncDoThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch {
        failureCallback(err);
    }
}
```

## Promise reject event

- unhandledrejection: 当一个Promise对象被拒绝, 且没有reject处理器时, 会触发unhandledrejection事件
- rejectionhandled: 当一个Promise对象被拒绝, 且有reject处理器时, 会触发rejectionhandled事件

```js
const myPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});
```

- `reject(error)`: this is the reject handler