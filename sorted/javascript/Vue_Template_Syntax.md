# 模板语法

## 文本插值

- 语法: `{{message}}`
- 不依赖于标签
- 支持JavaScript表达式

```html
{{number + 1}}
{{ok ? 'YES' : 'NO'}}
{{message.splic('').reverse().join('')}}
<div :id="`list-${id}`"></div>
```
## 指令

- 指令是带有v-前缀的特殊特性
- 指令的任务是在变量(表达式)变化时, 按指令功能更新DOM, 如v-bind, v-if, v-for

[指令](Vue_Directives.md)
