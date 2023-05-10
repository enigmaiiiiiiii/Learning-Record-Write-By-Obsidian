# Statement

## for statement

for-in

- 用于枚举对象中的非符号键**属性**
- ECMAScript中对象属性是无序的，所有属性都会返回一次，但返回顺序可能会因浏览器而异

for-of

- each iteration create a new variable
- reassigning the variable inside loop does not affect the original value

```js
const list = [1, 2, 3];
for (let l of list) {
  console.log(l);
}
```

## break vs continue

- `break`: exit the loop
- `break label`: exit the loop then execute the statement after the label
- `continue`: skip the current iteration. enter the next iteration
- `continue label`: skip the current iteration. enter the next iteration then execute the statement after the label

## label statement

- `label: statement`
- to implement stream control in break or continue statement

```js
```

## with statement


