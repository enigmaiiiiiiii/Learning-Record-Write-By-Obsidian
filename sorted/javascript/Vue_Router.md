# router

- 创建单页面应用

```js
import User from './components/User.vue'
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { 
        path: '/user/:id', 
        component: User 
    },
    // 匹配所有路径
    { 
        path: '*', 
        component: NotFound 
    }
  ]
})
```

## router-view

- 显示与**url**对应的组件

## router-link

- 取代`<a>`标签
- 可以在不重新加载页面的情况下更改**url**

## 使用router

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
```