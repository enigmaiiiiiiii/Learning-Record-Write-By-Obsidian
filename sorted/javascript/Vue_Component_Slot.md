# 插槽

## 插槽是什么

- 插槽是 Vue 组件的一个特殊的自定义区域，用于承载外部传入的内容
- 使用组件时, 插槽用于传递模板内容
  - 模板内容可以是HTML
  - 也可以是组件

假设组件模板\<button-demo/>定义是这样的:

ButtonDemo.vue

```html
<template>
    <button type="sumbit">
        <slot>submit<slot>  <!-- 为组件定义插槽 -->
    </button>
</template>
```

当使用\<button-demo>组件时, 可以在\<button-demo>标签内部使用任何template内容

```html
<button-demo>
    <span>提交</span>
</button-demo>
```

`<slot>`部分将被替换为`<span>提交</span>`

## 作用域插槽

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
````
