# Object

- 所有引用类型继承自Object

## Method

- toString(): return a string representing the object
- valueOf(): return the primitive value of the specified object
- isPrototypeOf()
- create()
  - create a new object, using an existing object as the [prototype](javascript-prototype.md) of the newly created object

## Static Method

`Object.keys(obj)`

- return an array of obj property names
  - [**enumerable**](javascript-property.md) property
  - string-keyed property names
  - directly defined on the object

## Static Method

`Object.keys(obj)`

- 返回一个数组, 包含对象的所有可枚举属性的名称
- return a array, containing the names of [all enumerable properties](javascript-foundation-) of the given object

`Object.values(obj)`

- return an **array** containing the given object's own [enumerable](javascript-property-sort.md#data-property) string-keyed property values

`Object.is(val1, val2)`

- `NaN === NaN` is `false` ,but `Object.is(NaN, NaN)` is `true`

```js
Object.is([], [])  // false
```

`Object.defineProperty(obj, prop, descriptor)`

`Object.freeze(obj)`

- prevent modification of existing property attributes and values

```js
const obj = {
  prop: 42
};
Object.freeze(obj);
obj.prop = 33;  // silently fail, throw error in strict mode
console.log(obj.prop);  // 42
```