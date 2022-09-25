# 注册组件

## 全局注册

`Vue.component(id, [definition])`

- id: 组件名称
- definition: 组件配置
  - data: 组件的数据
    - 必须是一个函数, 返回一个对象, 保证对象独立
  - template: 组件的模板

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

- 注册后`<button-counter>`组件可以在HTML中使用

```html
<div id="components-demo">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
</div>
```

## 通过props传递组件数据

向组件传递数据

```html
<blog-post title=""My journey with Vue></blog-post>
```

组件注册的prop

```js
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})
```

## 局部注册

- 全局注册意味着即使一个组件不再使用, 仍会包含在最终的构建中
- 所以使用局部注册

```js
var ComponentA = {/* ... */};
var ComponentB = {/* ... */};
```

局部组件在其子组件的模板中使用

```js
new Vue({
    el: "#app",
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }
})
```

## 导入组件

- 将组件放在单独的文件中, 然后导入

componentA.js

```js
export default {
    components: {
        {
            data: function() {
                return {
                    count: 0
                }
            },
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'

        },
    }
}
```

ComponentB.js

```js
export default {
    components: {
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    }
}
```

ComponentC.js

```js
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default {
    components: {
        ComponentA,
        ComponentB
    },
}
```

