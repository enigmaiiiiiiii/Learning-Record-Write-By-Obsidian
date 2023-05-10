# Javascript Property Basic

## Set A Property

```js
myObject.foo = "bar";
```

the process of setting a property

1. check if `myObject` has `foo` property, if it does, change its value to `bar`
2. if doesn't exist, traverse [`[Prototype]`](javascript-prototype.md) chain
3. if `[[Prototype]]` doesn't exist either, then add `foo` property directly to `myObject`

## Get A Property

- also called `[[get]]` operation

> primitve value doesn't have property
> but your adding property statement won't throw error


```js
var myObject = {
  a: 2
};
// this to property access statement access the same location
myObject.a;  // 2
myObject["a"];  // 2
```

## Computed Property

- define object **property name** that are dynamically computed
- using `[]` and expression that evaluated as property name

```js
const propName = 'foo';
const obj = {
  [propName + 'bar']: 'hello'
};
console.log(obj.foobar);  // hello
```