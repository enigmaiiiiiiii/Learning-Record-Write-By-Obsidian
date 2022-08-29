a# 模板语法

## 文本插值

- 语法: `{{message}}`
- 不依赖于标签

## v-html指令

> 指令: `v-`作为前缀，标识这是一个Vue提供的特殊attribute

- 语法: `<h1 v-html='msg'></h1>`
  - h1的内容被替换为msg的值
- 变量为msg的值与标签内容绑定, 被解析为html
- 安全警告: 动态渲染HTML是非常危险的，容易造成[XSS漏洞]()
  - 确定内容可靠时再使用v-html
  - 永远不要使用用户提供的HTML内容

## Attribute绑定

- 语法: `<div v-bind:id="dynamicId"></div>`
- 变量的值与属性绑定(例子中的div标签的id)
- 对于bool属性
  - 变量为[真值](JavaScript_Foundation_Primitive.md#boolean)或空字符串`""`, 标识启用属性
  - 变量为其他值时，忽略属性

## 支持JavaScript表达式

```html
{{number + 1}}
{{ok ? 'YES' : 'NO'}}
{{message.splic('').reverse().join('')}}
<div :id="`list-${id}`"></div>
```

不支持语句, 仅支持表达式

## 指令

- 指令的任务是在变量(表达式)变化时, 更新DOM

指令参数

```html
<a v-bind:href="url">...</a>
```

动态参数

- 动态参数的表达式的值应该是字符串或null

```html
<a v-bind:[attributeName]="url>...</a>
```

修饰符

- .prevent为修饰符

```
<form @submit.prevent="onSubmit">...</form>
```
