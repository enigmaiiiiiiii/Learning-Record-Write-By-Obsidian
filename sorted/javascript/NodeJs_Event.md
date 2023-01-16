# Node Event

- [Introduction](#introduction)
- [feature](#feature)
- [phase](#phase)
  - [1. timers phase](#1-timers-phase)
  - [2. pending callbacks phase](#2-pending-callbacks-phase)
  - [3. idle, prepare](#3-idle-prepare)
  - [4. poll phase](#4-poll-phase)
  - [5. check phase](#5-check-phase)
  - [6. close callbacks](#6-close-callbacks)
- [execute right away after each phase](#execute-right-away-after-each-phase)
- [guide line of not blocking the event loop](#guide-line-of-not-blocking-the-event-loop)
- [why should i avoid blocking the event loop and the worker pool](#why-should-i-avoid-blocking-the-event-loop-and-the-worker-pool)

## When to enter the event loop

instruction from a video:

![Event Loop](https://i.stack.imgur.com/4gSZv.png)

order of a thread

1. initialize program
2. top level code
3. require modules
4. execute top level code
5. Regiester event callbacks
6. enter event loop

## Introduction

- event loop inside a thread

event loop's order

- 左侧每一个方框表示一个phase(阶段)
- 有timers, pending callbacks, "idle, prepare", poll, check, close callbacks

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

- 每部分有一个由callback元素组成的FIFO(First In First Out) 队列
- 每一阶段都会执行队列中的callback, 知道队列中的callback耗尽
- **当队列中的callback被耗尽**或者**达到队列的最大限制**时, 事件循环将会进入下一个阶段


## feature

- **In Event Loop** everything works in one single thread
- your responsibility to [not block the event loop](#why-should-i-avoid-blocking-the-event-loop-and-the-worker-pool)

event loop does not actually maintain a queue

- it ask operating system to monitor a collection [file descriptors](Linux_File_Descriptor.md)
- using mechanism like [epoll](Linux_IO_API_Epoll.md) on linux, and some on other system
- in contrast, [worker pool](NodeJS_Worker_Pool.md) use a real queue, worker pop task from this queue

## phase

### 1. timers phase

- `setTimeout()` and `setInterval()`
- `setImmediate()` is special, it will be executed after [poll phase](4-poll-phase)
- [poll phase](4-poll-phase) control when timer are executed

a schedule execute after 100ms

a reading file asynchronously task start at 95ms

total delay will be 105ms

### 2. pending callbacks phase

- **system operations** such as TCP errors

for example TCP socket receives [ECONNREFUSED]() when attempting to connect

some system want to report the error

this will be queued to execute in the **pending callpacks phase**

### 3. idle, prepare

- internal use only

### 4. poll phase

main function

1. **Calculating** how long it should block and **poll for I/O**, then
2. Processing events in the poll queue

事件循环到poll phase时, 且没有[timer](NodeJS_Timers.md), 会发生这两件事中的一件

- 如果poll queue不为空, 遍历其中的事件, 并**同步执行**直到队列为空
- 如果poll queue为空, 会发生以下两件事中的一件
  - 如果有[setImmediate()](NodeJS_Timers.md#setImmediate)在poll phase之前调用, 事件循环将会进入[check phase](#check-phase)
  - 如果没有, 事件循环会一直等待直到有callback加入queue, 并立即执行

如果 poll queue 为空

- 则 event loop 检查[timers phase](#1-timers-phase)是否有已到达时间阈值的任务
- event loops 绕回timers phase 去执行

### 5. check phase

- `setImmediate()` callback execute here

### 6. close callbacks

- webserver or websocket shutdown
- `socket.destroy()`
- `socket.on('close',callback)`

## execute right away after each phase

- [process.nextTick()](NodeJS_Process.md#processnexttick)
- Microtask queue: mainly for Promise

## guide line of not blocking the event loop

1. Don't use async functions in CPU intensive tasks

- fs
- crypto
  - crypto.randomBytes
  - crypto.randomFillSync
  - crypto.pdkdf2Sync
- compression
  - zlib.inflateSync
  - zlib.deflateSync

2. Don't perform complex calulations

3. Be careful with JSON in large objects

4. Don't use too **complex regular expressions***

- [safe-regex]

## why should i avoid blocking the event loop and the worker pool

nodejs has small number of threads

- if you regularly perform heavyweight activity on either type of thread
- malicious client input could cause block

