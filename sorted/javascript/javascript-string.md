# String

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

## Method

`.length`: 字符串长度

下标操作获取字符: `str[0]` 

`.indexOf('lla')`, 返回子字符串开始位置，不存在则返回-1

`.slice(0, 3)`, 返回下标为0到2的子字符串

`.slice(2)`, 返回从下标2和之后的字符

`.toLowerCase()`, `.toUpperCase()`, 转换大小写

`.replace(regexp|substr, newSubStr|function)`, 替换字符串

- regexp: [regex]
- substr: 要替换的字符串, 如果使用字符串匹配, 仅替换第一个匹配
- newSubStr: 替换后的字符串
- function: 替换函数

  `newSubStr`可以使用`$`来表示特殊字符

  |变量名|值|
  |--|--|
  |`$$`||
  |`$&`||
  |`$\``||
  |`$'`||
  |`$n`||
  |`$<name>`||

  function参数

  ```js
  word.replace(re, (match, p1, p2, offset, string, string)=>{

  })
  ```

  - match: 匹配的字符串
  - p1, p2, ...: 匹配[regex分组](/sorted/regex/regex.md#4-分组)
  - offset: 匹配字符串在原字符串中的位置
  - string: 原字符串


