# JavaScript Memory Management

## Garbage Collection

1. Reference Counting Garbage Collection

- 引用计数垃圾回收

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

2. Mark and Sweep Garbage Collection

## Configuring Engine Memory

set available heap memory

```bash
node --max-old-space-size=6000 index.js
```

expose garbage collection for [debug](NodeJs_Debug.md)

```bash
node --expose-gc --inspect index.js
```

## WeakMap and WeakSet

- only store object
