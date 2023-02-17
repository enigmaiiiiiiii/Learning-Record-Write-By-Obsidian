# 单文件组件中的script

- [`<script>`](#script)
- [\<script setup\>](#script-setup)

## `<script>`

- `<script>`间的内容被当做[ES模块]()执行

```html
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```

## \<script setup>

- 使用`<script setup>`
  - 标签中内容被编译成[setup()]()函数的内容
  - 与普通`<script>`不同, `<script setup>`在[实例创建]()时执行
  - 组件的顶级绑定可以在模板中直接使用, 包括变量，函数

```html
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