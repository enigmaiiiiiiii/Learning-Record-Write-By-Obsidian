# JavaScript Tasks And Microtasks

## Tasks

## Microtasks

- is a short function
when execute

- after the function **the function or program which created it** exits
- and JavaScript event loop is empty

`queueMicrotask()`

queue a microtask to be performed after the currently executing script is complete.

```js
let callback = () => console.log("Regular timeout callback has run");

let urgentCallback = () => console.log("*** Oh noes! An urgent callback has run!");

console.log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
console.log("Main program exiting");
```