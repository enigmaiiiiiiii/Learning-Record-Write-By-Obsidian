# Vue - Instance API

## data

- Vue实例被**创建**时，将data的所有[property](javascript-property.md)加入到Vue的响应式系统中
- 当data的property发生变化时，视图会进行更新
- Vue实例**创建后**添加的property不会被加入到Vue的响应式系统中
- 组件实例的data必须是一个函数，返回一个对象
- 可以通过`vm.$data`访问data, vm是Vue实例

```js
var data = {a: 1};

var vm = new Vue({
    data: data 
})

vm.a == data.a // true
```
- object.freeze()阻止修改现有property

## methods


## mount element: el

- el: 'target'
  - target表示挂载目标
  - target是DOM元素，可以是HTML元素，也可以是CSS选择器
  - target是页面上已存在的元素
- 只能用在new创建的Vue实例中

> 如`el: '#app'`，挂载到id为app的元素上

## props

- 数组或对象
- 用于父[组件](vue-register-component.md#通过props传递组件数据)向子组件传递数据

```html
<child-component prop_name="val" />
```

- 语法: 

```js
props: [
    'prop_name_1':{options}, 
    'prop_name_2':{options}
]
```

- prop的选项`options`可以使用的属性:
  - type: 用于检查`prop_name`是否是特定类型, 可以是String, Number, Boolean, Array, Object, Date, Function, Symbol, [自定义构造函数], 或者是多个类型组成的数组
  - default: 用于指定`prop_name`的默认值
  - required: 用于指定`prop_name`是否是必须的
  - validator: 用于指定`prop_name`的值是否合法

## Life Circle of Vue Instance

[Vue Instance's Life Circle](vue-lifecycle.md)
