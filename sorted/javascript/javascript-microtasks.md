# NodeJS - Microtasks

## First What Is Tasks

- A javascript program or subprogram is executed from console
- An [event fires](nodejs-event-loop.md), adding event callback to task queue
- A timeout or interval created by `setTimeout()` or `setInterval()` fires, adding callback to task queue

## Then What Is Microtasks

They are microtasks

- [Promise](javascript-promise.md)
- [MutationOberserver()]
- [queueMicrotask()]

## When Microtasks Are Executed

In NodeJS

- After every phase of event loop

In Browser Environment

- After task completes and call stack is empty 
- Before browser renders updates to the UI

## Tasks VS Microtasks

- tasks new added to the queue after the iteration, will not run until the next iteration
- microtasks continues until the queue is empty, even new one is add to the queue

## queueMicrotask()

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
