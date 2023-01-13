# WeakMap

## Feature

- WeakMap的键只能是Object, 不能是原始数据类型, 不能是symbol
- 键不可枚举
- WeakMap的键是弱引用, 键所指的对象没有其它引用时, 就会被GC回收

## Why WeakMap

Map的缺点

1. 赋值和搜索都是O(n)的时间复杂度
2. 数组一直引用某个键和值，无法被GC算法处理回收

## WeakMap Principle in simplified code

```js
class MyWeakMap {

  #marker = Symbol("MyWeakMapData");

  get(key) {
    return key[this.#marker];
  }

  set(key, value) {
    key[this.#marker] = value;
  }

  has(key) {
    return this.#marker in key;
  }

  delete(key) {
    delete key[this.#marker];
  }
}
```

- WeakMap never holds a collections of keys
- WeakMap only adds meta data to each object, eg. `key[this.#marker] = value`