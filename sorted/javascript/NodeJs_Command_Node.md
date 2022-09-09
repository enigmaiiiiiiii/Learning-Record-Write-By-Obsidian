# 在命令行使用node

## 命令行参数

main.js

```js
process.argv.forEach((val, index)=>{
    console.log(`${index}: ${val}`);
})
```

命令行输入

```shell
node main.js joe 
```

```
0: /home/usr/.nvm/versions/node/v18.8.0/bin/node
1: /home/usr/project/path/main.js
2: joe
```
