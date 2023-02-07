# bug记录

## 1. 变量绑定到html标签href属性

```html
<div id="app">
    <a :href="url">click me</a>
    <div> hello world <div>
</div>
<script src="https://cdn.staticfile.org/vue/2.6.14/vue.min.js"></script>
<script>
    let v = new Vue({
        el: '#app',
        data: {
            url: 'https://www.baidu.com'
        }
    })
</script>
```

- 对于`:href=val`, 当val等于`""`, `"="`, `"+"`等符号时, 整个app元素会消失 


