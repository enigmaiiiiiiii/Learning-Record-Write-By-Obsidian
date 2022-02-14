## 创建一个新的package.json文件

- package使用用户提供的选项创建文件
  1. 进入包的根目录
  2. 运行命令`npm init`
  3. 按照命令行提示选项进行选择
  
## 使用.npm-init.js自定义package.json文件

- 在项目目录创建文件.npm-init.js
- 在文件中以文本形式添加自定义问题, 通过prompt()函数


```javascript
// .npm-init.js
module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");
```

- 添加自定义字段  

```javascript
// .npm-init.js
module.exports = {
  customFiled: 'example custom field',
  otherCustomField: "another example"
}
```

## 添加默认package.json文件 
1. 进入项目根目录
2. 运行命令`npm init --yes`