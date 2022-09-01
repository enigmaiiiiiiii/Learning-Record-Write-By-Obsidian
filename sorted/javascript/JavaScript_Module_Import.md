# import

- 用于导入另一个 module 导出(export)的绑定

## 语法

```javascript
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
- export: 被导入模块导出的接口名称
- name: 导入模块对象的别名

***
 
## 命名空间导入

```javascript
import * as MyModule from '/modules/my-module.js'

myModule.doThings()
```

- myModule代表一个命名空间对象
- 没有通配符引入的形式，如`import * from "module-name"`

## 默认导入

```javascript
import myDefault from '/modules/my-module.js';
```

- 导入`/modules/my-module.js`的[default]
- myDefault可以是what you like

```javascript
import myDefault, * as MyModule from 'modules/my-module.js'
```

- MyModule.default和myDefault指向同一个导出绑定

## 导入多个接口

## 导入带别名接口
