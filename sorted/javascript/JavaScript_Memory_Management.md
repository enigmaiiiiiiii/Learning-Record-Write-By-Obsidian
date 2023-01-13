# JavaScript Memory Management

## Visual Representation of Memory

![visual representation of memory](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop/the_javascript_runtime_environment_example.svg)

- heap represent a large region of memory
- Object are allocated in a heap

## Reference Counting Garbage Collection

[instruct code](garbage-collection.md)

- 引用计数垃圾回收

simple instruction

```js
// Obejct {a: {b: 2}} is created
let x = {
  a: {
    b: 2,
  },
};
// Object created and referenced by x

let y = x;
// reference +1
// reference count = 2

x = 1;
// x reference to 1, {a: {b: 2}} reference -1
// reference count = 1

let z = y.a;
// z reference to Object {a: {b: 2}} property, Object reference count +1
// reference count = 2

y = "mozilla";
// y reference to "mozilla", Object reference count -1
// a propert reference left, cant be collected

z = null;
// z reference to null, Object reference count -1
// Object reference count = 0, can be collected
```


## Mark and Sweep Garbage Collection

- 避免因循环引用而无法完成垃圾回收

> WeakMap and WeakSet

[WeakMap](JavaScript_Built_In_Object_WeakMap.md) Principle in simplified code

## Configuring Engine Memory

set available heap memory

```bash
node --max-old-space-size=6000 index.js
```

expose garbage collection for [debug](NodeJs_Debug.md)

```bash
node --expose-gc --inspect index.js
```