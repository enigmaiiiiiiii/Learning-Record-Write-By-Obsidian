# ES6模块

- 模块可以嵌入在代码中

```html
<script type="module">
// 模块代码
</script>
<script type="module" src="path/to/myModule.sj"></script>
```

- 嵌入的模块不能使用import加载其他模块

## 模块导入

- import关键字
- 模块标识可以是绝对路径或相对路径，必须是纯字符串
- 必须出现在顶部

```javascript
import moduleA  // 正确

if (condition) {
    import moduleB // 不允许
}
```

## 模块导出

- 关键字export