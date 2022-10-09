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

## 数据: data

- Vue实例被**创建**时，将data的所有[property](JavaScript_Property.md)加入到Vue的响应式系统中
- 当data的property发生变化时，视图会进行更新
- Vue实例**创建后**添加的property不会被加入到Vue的响应式系统中

```js
var data = {a: 1};

var vm = new Vue({
    data: data 
})

vm.a == data.a // true
```

- object.freeze()阻止修改现有property

## 方法: methods

## 挂载元素: el

- el: 'target'
  - target表示挂载目标
  - target是DOM元素，可以是HTML元素，也可以是CSS选择器
  - target是页面上已存在的元素
- 只能用在new创建的Vue实例中

> 如`el: '#app'`，挂载到id为app的元素上

## Vue实例的生命周期函数

[生命周期](Vue_Lifecycle.md)

## Vue实例的属性

- $data, `vm.$data === data`
- $el, `vm.$el === document.getElementById('app')`
- $watch, `vm.$watch('a', function(newVal, oldVal){})`, a改变后调用function(newVal, oldVal){}

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


