# Vue应用

## 创建Vue实例

index.html

```html
<div id="app">
    {{message}}
</div>

<script>
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
</script>
```

- Vue实例被**创建**时，将data的所有property加入到Vue的响应式系统中, 当data的property发生变化时，视图会进行更新
- Vue实例创建后添加的property不会被加入到Vue的响应式系统中

## Vue实例的生命周期

- created, updated, mounted, destroyed

## 计算属性

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

与methods的区别:

```js
methods: {
    reverseMessage: function() {
        return this.message.split('').reverse().join('')
    }
}
```

- 访问reversedMessage时, 会执行函数, 而不是缓存结果, 计算属性返回的是缓存结果

## 添加组件

```js
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
