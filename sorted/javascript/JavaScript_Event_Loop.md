# JavaScript Event Loop

```js
while (queue.waitForMessage()) {
  queue.processnextMessage();
}
```

## Adding Message

- messages are added anytime

```js
const seconds = new Date().getTime() / 1000;
setTiemout(() => {
  console.log(`Ran after ${new Date().getTiem() / 1000} - seconds`);
}, 500)
while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

- if there are messages, the `setTimeout` message will have to wait for other messages to be processed
- 也就是说: the second argument indicates a minimum time - not a guaranteed time

## Never Block

- javascript never blocks