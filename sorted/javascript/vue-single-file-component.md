# 单文件组件

>   **使用单文件组件(SFC)必须使用构建工具**

- [概念](#概念)
- [使用单文件组件](#使用单文件组件)
- [style 样式](#style-样式)
- [template 模板](#template-模板)
- [script 脚本](#script-脚本)
- [style 样式](#style-样式-1)
- [使用组件](#使用组件)
- [自定义指令](#自定义指令)
- [defineProps()和 defineEmits()](#defineprops和-defineemits)

## 概念

-   使相关联的 html, javascript, css 内聚

> 与其将代码库划分为三个巨大的层(html, css, js), 不如分成松散的组件

-   简称 SFC(Single File Component)
-   `<template>, <script>, <style>`放在同一个文件中，分别代表组件的 html, javascript, css

template.html, script.js, style.css 可以用一个如下的.vue 文件代替

```html
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

## 使用单文件组件

## style 样式

-   `<style>`表示全局样式
-   `<style scoped>`表示只在当前组件(.vue 文件)中生效
-   `<style module>`
-   `<style scoped>`中的样式想要影响子组件, 需要使用`:deep()`选择器

```css
<style scoped>
.a :deep(.b) {

}
</style>
```

- 插槽选择器, `:slooted()`选择器
  - 不受当前组件的`<style scoped>`影响
  - 被认为是父组件所持有
- `v-bind()`函数将 css 动态属性值与组件绑定

## template 模板

- `<template>`中只能有一个根元素

## script 脚本

[Vue 组件的 Script 脚本](vue-single-file-component-script.md)

## style 样式

-   `<style scoped>`表示 CSS 只在当前组件(.vue 文件)中生效, 不会作用于子组件

## 使用组件

[使用组件](vue-single-file-component-use.md)

## 自定义指令

-   用于在元素上注册自定义行为
-   命名规范: `vNameOfDirective`

```html:vue
<script setup>
    const vMyDirective = {
        beforeMount(el) => {
            // 在元素上做些操作
        }
    }
</script>
<template>
    <h1 v-my-Directive>This is a Heading</h1>
</template>
```

## defineProps()和 defineEmits()

-   用于定义组件的 props 和 emits
