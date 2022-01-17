# 原型链

- 对象内部的属性查找链, 当前对象的prototype是第一个搜索范围
- prototype链的顶层指向内置[Object.prototype](javascript_object.md)
- Object.prototype包含JavaScript中许多通用功能，如toString(), valueOf()