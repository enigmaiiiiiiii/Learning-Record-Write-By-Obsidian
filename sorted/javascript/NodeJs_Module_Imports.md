# 导入模块

## 从`node_modules`文件夹导入模块

- 传给`require("module_name")`的参数不是以`./`, `../`, `/`, nodejs则开始从`./node_modules`加载
  - 可以指定特定文件`module_name/path/to/file`
- `/home/ry/projects/foo.js`调用`require("bar.js")`时NodeJs的搜索顺序
  - `/home/ry/projects/node_modules/bar.js`
  - `/home/ry/node_modules/bar.js`
  - `/home/node_modules/bar.js`
  - `/node_modules/bar.js`

## 从全局变量路径导入模块

- NodeJs在哪里都找不到指定模块时, 从NODE_PATH中搜索模块
