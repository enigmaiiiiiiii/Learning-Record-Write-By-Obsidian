# Vue项目配置

- 项目配置文件: vue.config.js

vue.config.js的内容为导出包含配置选项的对象

```js
module.exports = {
  // 选项
  option_name: {
    // ...
  }
}
```
- 获得配置名称补全的帮助函数

```js
const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({

})
```

## 选项

- devServer
