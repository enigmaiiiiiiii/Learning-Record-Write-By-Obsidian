# 组件和实例

[实例](#实例)
[组件](#组件)
[生命周期](#生命周期)
[API](#api)

```html
<body>
    <div id="app">
        <blog-post title="My journey with Vue"></blog-post>
        <blog-post title="bloging with Vue"></blog-post>
        <blog-post title="Why Vue is so fun"></blog-post>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    // 注册Vue组件
    Vue.component("blog-post", {
        props: ["title"],
        template: "<h3>{{ title }}</h3>",
    });

    // Vue根实例
    new Vue({
        el: "#app",
    });
</script>
</html>
```

- Vue实例由Vue管理的对象组成
- 一个页面由一个[Vue根实例](vue-instance.md)管理
- Vue根实例由多个[Vue组件](vue-component.md)组成
- Vue组件是可复用的[Vue实例](vue-instance.md)

## 实例

[Vue实例](vue-instance.md)

## 组件

[Vue组件](vue-component.md)

## 生命周期

[Vue生命周期](vue-lifecycle.md)

## API

[Vue实例API](vue-instance-api.md)

[根VueAPI](vue-root-api.md)
