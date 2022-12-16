# difference And Common Between CommonJS And ES6

## 区别

- CommonJS模块输出的是值的拷贝，ES6输出值的引用
- CommonJS导出单个值，ES6导出多个值
- CommonJS运行时加载，ES6编译时输出接口
- CommonJS可以写在语句里，ES6只能写在[顶层](JavaScript_Context.md)
- CommonJS this是window，ES6 this是undifined

***

- ES只将`.js`, `.mjs`, `cjs`扩展名文件当做javascript文件
- CommonJS把所有缺少`.json`和`.node`扩展名的文件当做javascript文件

***

- CommonJS不允许加载ES6模块, ES6可以加载CommonJS模块
- ES不支持以文件夹作为模块加载

## 相同特性

- 模块代码只在加载后执行
- 模块只能加载一次
- 模块是单例
- 模块可以定义公共接口
- 模块可以请求加载其他模块
- 支持循环依赖

## EC6新增特性

- 默认严格模式下执行
- 不共享全局命名空间
- 顶级模块this的值时undifined(常规脚本中是window)
- 模块中的var声明不会添加到window对象
- ES6模块是异步加载和执行的
