# import

- [import](#import)
  - [abstract](#abstract)
  - [默认导入](#默认导入)
  - [命名空间导入](#命名空间导入)
  - [导入多个接口](#导入多个接口)
  - [导入带别名接口](#导入带别名接口)
  - [语法](#语法)
  - [动态加载模块](#动态加载模块)


## abstract

```js
import default_name from 'module_path'
```

- 用于导入另一个 module 导出(export)的绑定
- module_path: 模块标识, 可以是绝对路径或相对路径，必须是纯字符串
  - 相对路径名引用必须以`/, ./, ../`开始
- 必须出现在顶部

## 默认导入

```js
import myDefault from '/modules/my-module.js';
```

- 导入`/modules/my-module.js`的[default]
- myDefault可以是what you like

```js
import myDefault, * as MyModule from 'modules/my-module.js'
```

- MyModule.default和myDefault指向同一个导出绑定

## 命名空间导入

- 可以有效避免命名冲突

```js
import * as MyModule from '/modules/my-module.js'

myModule.doThings()
```

- myModule代表一个命名空间对象
- 没有通配符直接引入的形式，如`import * from "module-name"`


## 导入多个接口

## 导入带别名接口

***

## 语法

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- defaultExport: 默认接口引用名
- module-name: 要导入的模块, 通常是目标模块的.js文件的路径名
  - 可以不包括.js后缀
  - 相对路径名引用必须以`/, ./, ../`开始
- export: 被导入模块导出的接口名称
- name: 导入模块对象的别名

## 动态加载模块

```js
import('/modules/myModule.js')
  .then(Module)=> {
    // do something with module
  }
```