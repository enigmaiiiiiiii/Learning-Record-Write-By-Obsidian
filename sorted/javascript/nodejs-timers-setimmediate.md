# NodeJS setImmediate()

`setImmediate(callback[,...args])`

## feature

designed to execute a script once the current [poll phase](nodejs-event-loop.md#4-poll-phase) completes

- for example: execute `callback` after **I/O events** callbacks

## setImmediate() vs setTimeout()

```js
import fs from 'fs';

fs.readFile(__filename, () => {
  setTimeout(() => {
    setTimeout(() => {
      console.log('timeout');
    })
    setImmediate(() => {
      console.log('immediate');
    })
  });
});
```

## 
