# 单文件组件

- **使用SFC必须使用构建工具**

## 概念

- 使相关联的html, javascript, css内聚

> 与其将代码库划分为三个巨大的层(html, css, js), 不如分成松散的组件

- 简称SFC(Single File Component)
- `<template>, <script>, <style>`放在同一个文件中，分别代表组件的html, javascript, css 

template.html, script.js, style.css可以用一个如下的.vue文件代替

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

## 使用单文件组件

## style样式

- `<style>`表示全局样式
- `<style scoped>`表示只在当前组件(.vue文件)中生效
- `<style module>`
- `<style scoped>`中的样式想要影响子组件, 需要使用`:deep()`选择器

```css
<style scoped>
.a :deep(.b) {

}
</style>
```
- 插槽选择器, `:slooted()`选择器
  - 不受当前组件的`<style scoped>`影响
  - 被认为是父组件所持有

- `v-bind()`函数将css动态属性值与组件绑定

## template模板

- `<template>`中只能有一个根元素

## script脚本

[Vue组件的Script脚本](Vue_Single_File_Component_Script.md)

## 使用组件

[使用组件](Vue_Single_File_Component_Use.md)

## 自定义指令

- 用于在元素上注册自定义行为
- 命名规范: `vNameOfDirective`

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

## defineProps()和defineEmits()

- 用于定义组件的props和emits
