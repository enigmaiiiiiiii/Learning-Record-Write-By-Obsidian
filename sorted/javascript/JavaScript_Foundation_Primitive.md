# 基本类型

## number

- 64位浮点格式

```javascript
let myAge = 17;
let myAge = 2.456;
```

- `Number(value)`, 将value转换成number, 无法转换, 返回NaN
- `new Number(value)`, 将value包装成可操作的数值对象, 很少用

```javascript
new Number(value);
var a = new Number('123');  // a === 123 false
var b = Number('123');  // b === 123 is true
```

## bigint

## string

- 单引号或双引号中的内容表示字符串

```javascript
let dolphinGoodbye = 'So long and thanks for all the fish';
```

- 转义字符: 字符前加`\`, 将字符识别成文本而不是代码的一部分
- 操作符`+`, 来连接字符串
- number提供toString()方法转换成字符串
- `parseFloat(String)`, 将字符串数字转换为float类型, 全局对象的方法
- 模板字符串: 用(`)表示，可以用来
  - 定义普通字符串
  - 多行字符串
  - 字符串中嵌入变量
  ```javascript
  var name = "bob", time = "today";
  console.log(`Hello ${name}, how are you ${time}`);
  ```

方法

- `.length`: 字符串长度
- 下标操作获取字符: `str[0]` 
- `.indexOf('lla')`, 返回子字符串开始位置，不存在则返回-1
- `.slice(0, 3)`, 返回下标为0到2的子字符串
- `.slice(2)`, 返回从下标2和之后的字符
- `.toLowerCase()`, `.toUpperCase()`, 转换大小写

## boolean

- false值
  - false关键字
  - 0
  - -0
  - 0n: bigint作为bool值
  - "": 空字符串 
  - null: 缺少值
  - undefined
  - NaN: 非数值
- true值
  - 被定义为false值以外的任何值

## null

## undifined

## symbol
