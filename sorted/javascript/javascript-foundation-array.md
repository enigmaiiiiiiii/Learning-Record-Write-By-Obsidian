# 数组

- 任何类型元素都可以存储在数组中

- `let array = [1, 2, 3, 4, 5]`

## 属性

## 方法

`.length`

`push()`

- 数组末尾添加元素, 返回数组长度

`pop()`

- 删除数组最后一个元素, 返回已删除元素

`map(callbackfn[, thisArg])`

> thisArg is optional

- 对数组中的每个元素调用`callbackfn`函数
- 返回值: **新数组**
- callbackfn自动传入三个参数: `element, index, array`
- type of callbackfn: `(element, index, array) => {}`
  - element: 数组中的元素
  - index: 元素在数组中的索引
  - array: 数组本身
- thisArg: callbackfn中的this值

`forEach()`

- 与map的区别是返回值, forEach()返回**undefined**

