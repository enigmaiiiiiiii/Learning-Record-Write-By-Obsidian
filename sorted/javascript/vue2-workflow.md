# 工作流程

## 添加Vue组件 

- 新建.vue文件

## 编写router

将这里提到的内容添加在Router映射文件index.js

```js
import vueRouter from 'vue-router'  // 引入vue-router module
Vue.use(VueRouter)  // 
const router = {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
}
export default router;
```

路径映射部分

```js
const routes = [
    {
        path: "/",
        component: HomeView,
        children: [
            path: "/children/path",
            component: () => import("../components/children/children.vue"),
        ]
    },
    {
        path: "/about",
        component: () => import("../views/About.vue"),
    }
]
```

## 设置index属性 


