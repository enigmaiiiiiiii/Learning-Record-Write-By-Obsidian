# 使用单文件组件

在webpack等前端构建工具中当做模块导入

```html
<template>
    <MyComponent />
</template>

<script>
    import MyComponent from `./MyComponent.vue`
    export default {
        components: {
            MyComponent
        }
    }
</script>

```

> `<script setup>`标签中import的组件会自动注册为局部组件


动态组件: 通过`<component/>`的`:is`属性来动态绑定组件

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
