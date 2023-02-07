# 配置

## 基本配置

基本配置webpack.config.js

```js
const path = require("path");
module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
```

使用不同的配置文件

- 使用`--config`选项指定配置文件

package.json

```json
"scripts": {
    "build": "webpack --config prod.config.js"
}
```

## DevServer

```js
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```
### devServer.historyApiFallback

- 使用HTML5 History API时，任意的404响应都可能需要被替代为index.html
- historyApiFallback设置为: true

```js
module.exports = {
  devServer: {
    historyApiFallback: true,
  },
};
```

通过rewrite进一步控制

```js
module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' },
      ],
    },
  },
};
```


