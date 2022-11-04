# 模块化工程中使用VueRouter

- 其中**路径定义, 页面, 路由映射的组件**在单独文件中
- **其它内容可在`main.js`中定义**

## 写在main.js

- [引入并安装插件](#引入并安装插件)
- [创建路由对象](#创建路由对象)
- [创建Vue实例](#创建Vue实例)

## 写在router/index.js

- [定义路径](#定义路径)

## 写在app.vue

- [页面内容](#页面内容)

## 引入并安装插件

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
```
## 定义路径

- 通常在单独文件中定义

```js
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
```

- Foo和Bar是[Vue组件](Vue_Component.md)

## 创建VueRouter实例

- routes: 路径数组
- 还可以配置其它选项

```js
const router = new VueRouter({
    routes //
})
```

## 挂载根实例

main.js

```js
const app = new Vue({
    router //
}).$mount('#app')
```

## 页面内容

app.vue

```html
<template>
    <div id="app">
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
```