# 赋值

## 解构赋值

- 语法允许unpack**数组中的值** 或 **对象属性**

## 数组解构

```javascript
var foo = ['one','two','three'];
var [a, b, c] = foo;
var [a = 1, b = 2, c = 3, d = 4] = foo;  // 提供默认值
[a, b] = [b, a];
```

正则表达式提取值

- todo

## 对象解构

```javascript
const user = {id: 42, isVerified: true};
const {id, isVerified} = user;  // p=42, q=true
var {p: foo, q: bar} = user; // foo=42, bar=true
```

解构函数参数

```javascript
function userDisplayName({displayName: name}) {
    return name;
}

console.log(userDispalyName(user));
```

[For...of...]() 迭代解构

```javascript
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harray Smith',
            sister: 'Samantha Smith',
        },
        age: 35,
    },

    {

    }
]
for (const {name: n, family: father: f} of people) {
    console.log('Name: ${n}, Father: ${f}')
}
```
