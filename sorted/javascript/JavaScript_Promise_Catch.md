# Promise catch()

- 可以当做[then(undefined, onRejected)](JavaScript_Promise_Then.md)的简写

Syntax

`promiseInstance.catch(onRejected)`

## code

```js
const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
});

promise1.catch(error => {
    console.error(error);
})
```