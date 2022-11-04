# javascript语句

## for语句

for-in

- 用于枚举对象中的非符号键属性
- ECMAScript中对象属性是无序的，所有属性都会返回一次，但返回顺序可能会因浏览器而异

for-of

- 用于遍历可迭代对象的元素, 比如数组

```js
for (let v of list) {
  // statement
}
```

## break和continue

- break退出循环
- `break label`退出循环并执行label后的语句
- continue跳过本次循环的剩余语句,进入下次循环
- `continue label` 跳过本次循环执行label后的下一次循环

## 标签语句

- 语法`label: statement`
- 用于break或continue语句实现控制流

## with语句

