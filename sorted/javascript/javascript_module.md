# 模块模式

[CommonJS](javascript_module_CommonJS.md)

[ES6模块](javascript_module_ES6.md)

## CommonJS与ES6

- 区别
  - CommonJS模块输出的是值的拷贝，ES6输出值的引用 
  - CommonJS导出单个值，EC6导出多个值
  - CommonJS运行时加载，EC6编译时输出接口
  - CommonJS可以写在语句里，EC6只能写在[顶层](javascript_上下文与作用域.md)
  - CommonJS this是window，EC6 this是undifined
- 相同特性
  - CommonJS
  - 模块代码旨在加载后执行
  - 模块只能加载一次
  - 模块是单例
  - 模块可以定义公共接口
  - 模块可以请求加载其他模块
  - 支持循环依赖
- EC6新增特性
  - 默认严格模式下执行
  - 不共享全局命名空间
  - 顶级模块this的值时undifined(常规脚本中是window)
  - 模块中的var声明不会添加到window对象
  - ES6模块是异步加载和执行的
 