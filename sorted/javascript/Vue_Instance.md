# Vue实例

## html中的Vue实例

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

## Vue根实例

- [new](JavaScript_Operator_New.md) Vue()创建的Vue实例


## Vue实例的属性

- $data, `vm.$data === data`
- $el, `vm.$el === document.getElementById('app')`
- $watch, `vm.$watch('a', function(newVal, oldVal){})`, a改变后调用function(newVal, oldVal){}

> Vue用符号$命名的属性和方法, 用于区分用户自定义的属性和方法

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

## 注册组件


