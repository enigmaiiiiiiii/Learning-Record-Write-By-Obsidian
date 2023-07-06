# JavaScript - Scope Chain

- 作用域链: 标识符(变量名称，函数声明)的查找范围, 查找顺序由前都后
- 作用域链首端: **当前执行函数上下文**
- 作用域链末端: **全局上下文**

## 作用域链增强

- with, try/catch语句中的catch块会在前端添加一个[上下文]
- 在作用域前端添加变量对象

```javascript
function buildUrl() {
  let qs = "? debug = true";
  with(location) {
    let url = href + qs;
  }
  return url;
}
```

> location作为with语句块的上下文, href为location.href
