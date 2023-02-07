# router

- 用于创建单页面应用

## 在模块化工程中使用

[模块化工程中使用](vue-router-use-in-modular-project.md)

## router-view

- 显示与**url**对应的组件

## router-link

- 取代`<a>`标签
- 可以在不重新加载页面的情况下更改**url**
- 通过`to`属性指定**路径名称**(path属性的值)
## 使用router

以本地项目为例

- `localhost:8080/home`将在router-view中显示Home组件

index.html

```html
<div id="app">
    <p>
        <router-link to="/">GoHome</router-link>
        <router-link to="/about">GoAbout</router-link>
    </p>
    <router-view></router-view>
</div>
```

route.js

```js
// 路径映射到组件
const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
]

// 创建router实例
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
// 创建和挂载根实例
const app = Vue.createApp({})
// app上启用router
app.use(router);
app.mount('#app');
```

## 动态路由

## 嵌套路由

- 在`<router-view/>`中嵌套`<router-view/>`

```js
const routes = [
    {
        path: '/parent',
        component: parent,
        children: [
            {
                path: 'child',
                component: child
            }
        ]
    }
]
```

- 匹配路径`/parent/child`
