# 指令

## v-if

## v-else

## v-else-if

## v-for

- 基于数据渲染为多个元素
- 期望类型Array | Object | number | string | Iterable 

```html
<div v-for="item in items">{{item.text}}<div>
<div v-for="(item, index) in items"></div>`
<div v-for="(value, key) in object"></div>`
<div v-for="(value, name, value) in object"></div>
```

## v-on

- 绑定Vue对象中的methods属性中的函数
- 简写: `@事件="function()"`

## v-bind

## v-model

- 在表单输入元素或组件上创建双向绑定
- 仅限于`<input>, <select>, <textarea>`
- 修饰符
  - `.lazy`: 监听change事件而不是input
  - `.number`: 将输入转为数字
  - `.trim`: 移除输入内容两端的空格

## v-slot

## v-pre 

## v-once

## v-memo