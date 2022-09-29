# 项目目录

```bash
project
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   vite.config.js
│   
├─public
├─src
│   App.vue
│   main.js
│
├───assets
│       main.css
│
└───components
        HelloWorld.vue
        HelloWorld.js
```

## App.Vue

- 整合所有组件

```html
<script setup>
    import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
    <div> {{state.count}}</div>
</template>
```

## main.js

- 创建Vue实例

```js
import createApp from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')
```

## index.html

- 页面入口
- 引入main.js

```html
<body>
    <div id="app">
        <script type="module" src="/src/main.js">
        </script>
    </div>
</body>
```

## public文件夹

- 放置静态资源, 通过`/`直接访问

## src/assets

- 固定资源文件

## 启动

- `npm run dev`


