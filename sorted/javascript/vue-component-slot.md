# Vue Slot

## What is Slot

- 插槽是 Vue 组件的一个特殊的自定义区域，用于承载外部传入的内容
- 使用组件时, 插槽用于传递**模板内容**
  - 模板内容可以是HTML
  - vue template标签中的内容
  - 也可以是其它组件

假设组件模板`<button-demo/>`定义是这样的

ButtonDemo.vue

```html
<template>
    <button type="sumbit">
        <slot>submit<slot>  <!-- 为组件定义插槽 -->
    </button>
</template>
```

当使用`<button-demo>`组件时, 可以在`<button-demo>`标签内部使用任何template内容

```html
<button-demo>
    <span>Submit</span>
</button-demo>
```

`<slot>`部分将被替换为`<span>Submit</span>`

## 作用域插槽

what's for

- 想在组件中使用**其它带有插槽的组件**时
- 使用作用域插槽可以访问子组件中才有的数据

子组件current-user.vue

- user作为slot的属性

```html
<template>
    <span>
        <slot v-bind:user="user"></slot>
    </span>
</template>
<script setup>
    const user = {
        "lastName": "Doe",
        "firstName": "John"
    }
</script>
```

使用子组件的父组件

- v-slot来**定义**插槽提供的属性的名称

```html
<template>
    <current-user>
        <template v-slot:default="slotProps">
            {{slotProps.user.lastName}}
        </template>
    </current-user>
<template>
```

## 具名插槽

```html
<header>
    <slot name="header">
    </slot>
</header>
<main>
    <slot><slot>
</main>
<footer>
    <slot name="footer"></slot>
</footer>
```

- 有时候, 一个组件有多个插槽
- 不带名称的slot隐式命名为default
- <slot name="<name>">定义具名插槽为\<name>
- 使用<template v-slot:slotname>使用具名插槽

使用命名插槽

- 没有在template中的内容被视为默认插槽内容

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
