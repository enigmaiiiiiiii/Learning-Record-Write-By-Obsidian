# 属性

## 属性设置

```js
myObject.foo = "bar";
```

属性设置的过程, 以上面表达式为例:

1. 检查myObject上是否有名为foo的属性, 如果存在则修改它的值
2. 如果不存在, 则遍历对象的`[[Prototype]]`链
3. 如果`[[Prototype]]`上不存在名为foo的属性, 则在myObject上创建一个名为foo的新属性

## 访问属性

- 也称为属性的`[[get]]`操作
- 原始值不能有属性，但是添加属性的语句不会报错

两条属性访问语句访问的是同一位置

```javascript
var myObject = {
  a: 2
};
myObject.a;  // 2 
myObject["a"];  // 2
```
- 可计算属性名`myObject[prefix+"bar"] = "hello"`

## 属性分类

- 属性的只读

[属性](javascript_Property_Sort.md)

## 属性屏蔽

[ ] to do

