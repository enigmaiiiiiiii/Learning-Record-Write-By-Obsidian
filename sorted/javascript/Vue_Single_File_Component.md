# 单文件组件

## 概念

- 使相关联的html, javascript, css内聚

> 与其将代码库划分为三个巨大的层(html, css, js), 不如分成松散的组件

- 简称SFC(Single File Component)
- **使用SFC必须使用构建工具**
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

## script脚本: 

- `<script setup>`
  - 标签内容被编译成setup()函数的内容
  - 与普通`<script>`不同, `<script setup>`所在的[实例创建]()时执行
- 组件的顶级绑定可以在模板中直接使用, 包括变量，函数

```html:vue
<script setup>
const msg = "hello";
function log() {
    console.log("hello");
}
<script>
<template>
    <button @click="log">{{msg}}</button>
</template>
```

## 使用组件

```html
<script setup>
    import MyComponent from `./MyComponent.vue`
</script>
<template>
    <MyComponent />
</template>
```

动态组件

- 通过`<component/>`的`:is`属性来动态绑定组件

```html:vue
<script setup>
    import Foo from `./Foo.vue`
    import Bar from `./Bar.vue`
</script>
<template>
    <component :is="Foo" />
    <component :is="someCondition ? Foo : Bar" />
</template>
```

递归组件

- 递归导入自身: FooBar.vue的组件可以在其模板中用<FooBar />使用自身
- 使用别名避免从外部导入的组件与自身命名冲突

```html:vue
<script>
import {FooBar as FooBarChild} from `./components`
</script>
```

命名空间组件

- 用于从单个文件中导入多个组件

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
