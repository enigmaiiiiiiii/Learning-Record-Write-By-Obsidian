# Worker

- [Introduction](#introduction)
- [feature](#feature)
- [create a worker in main thread](#create-a-worker-in-main-thread)
- [postMessage()](#postmessage)
- [onmessage](#onmessage)

## Introduction

> in other lauguage, maybe called **thread**

- a background task
- a feature in javascript, **not in nodejs**
- can send message back to its creator
- javascript 通过 `Worker` 实现线程 communication
- note main consist of three parts
  - create a worker
  - send message
  - receive message

## why use worker

- use like a thread

## create a worker in main thread

> main thread: a relatively name, it means the thread that create the worker

create a worker

- `main.js`

```js
const worker = new Worker('script/worker.js')
```

- `script/worker.js` is 脚本文件路径

this is the worker `script/worker.js`

- worker will listen [onmessage](#onmessage) event

```js
onmessage = function(e) {
  // do something
}
```

## postMessage()

- in one word: is a method to send message to each other
- **script** postMessage() send **message** to creator
- **worker** postMessage() send **message** to worker script
- **message** send to each other is method agrument

creator.js

```js
const oneWorker = new Worker('script/worker.js')
oneWorker.postMessage(message)
```

worker.js

```js
postMessage(message);
```

## onmessage

- in one word: something should when receive message(data)
- worker onmessage handle the function when **receive message** from **creator**
- script onmessage handle the function when receive message from creator

creator.js

```js
const oneworker = new Worker('script/worker.js')
oneworker.onmessage = function(e) {
  // do something
}
```

worker.js

```js
onmessage = function(e) {
  // do something
  console.log(e.data)
}
```

- e: the message object
- e.data: the message data, send by creator [postMessage()](#postmessage) method, equal to its argument

