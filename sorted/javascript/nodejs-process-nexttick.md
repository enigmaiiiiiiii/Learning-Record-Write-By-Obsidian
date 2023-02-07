# Process.nextTick()

## feature

- callback pass to `process.nextTick()` going to executed on the **current iteration of event loop**
- callback pass to `process.nextTick()` will be resolved before the event loop continue
- 或者说, `process.nextTick()` 会在[每个事件阶段](nodejs-event.md#phase)队列完成后执行
- recursive `process.nextTick()` will block the event loop

## take a look

定义了一个异步函数, 实际没有执行异步操作, 但是 try to 引用一个作用域中还未定义的变量

> 未定义变量, bar

```js
let bar;
// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) {
  // callback();
  process.nextTick(callback);  // use process.nextTick() instead of callback()
}

// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined
});

bar = 1;
```

- 如果, 将callback传递给`process.nextTick(callback)`
  - callback会在所有**variable, function, etc.定义之后**执行
  - 同时, 可以在**进入事件循环之前**执行

## process.nextTick() vs setImmediate()

[`setImmediate()`](nodejs-timers.md#setimmediate)

- `process.nextTick()` is more immediate `setImmediate()`
- 互换名称会更符合函数的功能
- 但是互换命名会影响npm大部分package
- 推荐使用`setImmediate()`代替`process.nextTick()`

[and setTimeout()](/sorted/code-snippet/javascript/nexttick-setimmediate-settimeout.md)

## why use `process.nextTick()`

- run a callback run **after the call stack** but **before the event loop continue**

```js
const server = net.createServer();
server.on('connection', (conn) => {})

server.listen(8080);
server.on('listen', () => {});
```

`listen()` is run at beginning of the event loop
- 有可能在`listen()`之前, `connection`事件就已经触发了

emitting an event from constructor immediately

```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => {
      this.emit('evnet');
    });
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
```