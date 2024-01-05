# Node Event

* [When to enter the event loop](#when-to-enter-the-event-loop)
* [What is Event Loop](#what-is-event-loop)
* [Features](#features)
* [Phase Detail](#phase-detail)
  * [1. timers phase](#1.-timers-phase)
  * [2. pending callbacks phase](#2.-pending-callbacks-phase)
  * [3. idle, prepare](#3.-idle,-prepare)
  * [4. poll phase](#4.-poll-phase)
  * [5. check phase](#5.-check-phase)
  * [6. close callbacks](#6.-close-callbacks)
* [Execute Right Away After Each Phase](#execute-right-away-after-each-phase)
* [Don't Block The Event Loop](#don't-block-the-event-loop)
* [Guide Line Of Not Blocking The Event Loop](#guide-line-of-not-blocking-the-event-loop)

## When to enter the event loop

instruction from a video

order of a thread

1. initialize program
2. top level code
3. require modules
4. execute top level code
5. Regiester event callbacks
6. enter event loop

## What is Event Loop

- event loop inside a thread

event loop's order

- every box in the left side represent a phase
- thye are
  - timers
  - pending callbacks
  - "idle, prepare"
  - poll
  - check
  - close callbacks

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

- every part have a FIFO(First In First Out) queue with callback elements
- every phase will executed the callback in the queue, until the queue is exhausted
- when the **callbacks in queue are exhausted** or **the limit of the queue is reached**, the event loop will move to the next phase

## Features

- **In Event Loop** everything works in one single thread
- your responsibility to [not block the event loop](#don't-block-the-event-loop)

event loop does not actually maintain a queue

- it ask operating system to monitor a collection [file descriptors](linux-file-descriptor.md)
- using mechanism like [epoll](linux-io-api-epoll.md) on linux, and some on other system
- in contrast, [worker pool](nodejs-worker-pool.md) use a real queue, worker pop task from this queue

## Phase Detail

### 1. timers phase

Which callback will be executed in this phase

- [`setTimeout()`](javascript-built-in-object.md#settimeout) and `setInterval()`

Some callback seems to be executed in this phase, but actually not

- `setImmediate()` is special, it will be executed after [poll phase](4-poll-phase)

[poll phase](4-poll-phase) control when timer are executed

Cause the existence of event loop, the delay in timer is not guaranteed

- for example, if a schedule execute after 100ms, then a reading file asynchronously task started which takes 95ms
- the total delay may be more than 100ms, maybe 102ms, 105ms, or even more

### 2. pending callbacks phase

- **system operations** such as TCP errors

for example TCP socket receives [ECONNREFUSED]() when attempting to connect

some system want to report the error

this will be queued to execute in the **pending callpacks phase**

### 3. idle, prepare

- internal use only

### 4. poll phase

Main function

1. **Calculating** how long it should block and **poll for I/O**, then
2. Processing events in the poll queue

when event loop enter poll phase, and there is no [timer](nodejs-timers.md), one of the following will happen

- if poll queue is not empty, event loop will iterate through its queue of callbacks **executing them synchronously** until either
  - the queue has been exhausted
  - or the system-dependent hard limit is reached
- if poll queue is empty
  - if script has been called by `setImmediate()`, event loop will end poll phase and continue to check phase to execute the callback
  - if script has not been called by `setImmediate()`, event loop will wait for callbacks to be added to the queue, then execute them immediately

> the event loop

### 5. check phase

- `setImmediate()` callback execute here

### 6. close callbacks

- webserver or websocket shutdown
- `socket.destroy()`
- `socket.on('close',callback)`

## Execute Right Away After Each Phase

- [process.nextTick()](nodejs-process.md#processnexttick)
- [Microtask](javascript-microtasks.md) queue: mainly for [Promise]()

## Don't Block The Event Loop

Summary

- nodejs run js code in event loop
- offers a worker pool for heavy task like i/o

why should i avoid blocking the event loop and the worker pool

- nodejs has small number of threads
- if you regularly perform heavyweight activity on either type of thread
- malicious client input could cause block

## Guide Line Of Not Blocking The Event Loop

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

3. Be careful With JSON In Large Objects

4. Don't use too **complex regular expressions***

- [safe-regex]()

