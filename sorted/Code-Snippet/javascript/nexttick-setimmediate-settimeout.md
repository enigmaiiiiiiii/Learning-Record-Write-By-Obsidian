# process.nextTick() vs setImmediate() vs setTimeout()

```js
console.log("Hello => number 1");

setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 0);

setImmediate(() => {
  console.log("Running before the timeout => number 3");
});

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});
```

```bash
Hello => number 1
Running at next tick => number 2
Running before the timeout => number 3
The timeout running last => number 4
```