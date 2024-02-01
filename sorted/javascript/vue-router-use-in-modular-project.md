# VueRouter In Modular Project

* [Introduction](#introduction)
* [write in main.js](#write-in-main.js)
* [wirte in router/index.js](#wirte-in-router/index.js)
* [write in app.vue](#write-in-app.vue)
* [引入并安装插件](#引入并安装插件)
* [定义路径](#定义路径)
* [创建VueRouter实例](#创建vuerouter实例)
* [挂载根实例](#挂载根实例)
* [页面内容](#页面内容)

## Introduction

- 其中**路径定义, 页面, 路由映射的组件**在单独文件中
- **其它内容可在`main.js`中定义**

## write in main.js

- import and use plugin

## wirte in router/index.js

- [定义路径](#定义路径)

## write in app.vue

- [web page](#页面内容)

## Import And Use Plugin

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

## Create VueRouter Instance

- routes: array of route
- 还可以配置其它选项

```js
const router = new VueRouter({
    routes //
})
```

## mount root instance

main.js

```js
const app = new Vue({
    router //
}).$mount('#app')
```

## Web Page

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
