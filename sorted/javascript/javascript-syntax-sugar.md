# JavaScript Syntax Sugar

- 属性值简写

属性名和变量名一致时

```javascript
let name = 'Matt';
let person = {
  name
}
```

- 可计算属性

`item[expression]`： 表示将表达式expression计算值作为对象item属性名

- 简写方法名

```javascript
let person = {
  sayName(name){
    console.log('My name is %{name}');
  }
}
```