# VueRouter In Modular Project

- [Introduction](#introduction)
- [write in main.js](#write-in-mainjs)
- [写在router/index.js](#写在routerindexjs)
- [write in app.vue](#write-in-appvue)
- [引入并安装插件](#引入并安装插件)
- [定义路径](#定义路径)
- [创建VueRouter实例](#创建vuerouter实例)
- [挂载根实例](#挂载根实例)
- [页面内容](#页面内容)

## Introduction

- 其中**路径定义, 页面, 路由映射的组件**在单独文件中
- **其它内容可在`main.js`中定义**

## write in main.js

- [引入并安装插件](#引入并安装插件)
- [创建路由对象](#创建路由对象)
- [创建Vue实例](#创建vue实例)

## wirte in router/index.js

- [定义路径](#定义路径)

## write in app.vue

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

- Foo和Bar是[Vue组件](vue-component.md)

## 创建VueRouter实例

- routes: array of route
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
