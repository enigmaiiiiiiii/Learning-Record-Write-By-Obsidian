# 响应式API

一个例子, 使用reactive()函数创建一个响应式对象

```js
import { reactive } from 'vue'
const state = reactive({count: 0});
```

## reatcive()

- 返回一个**对象**的响应式代理
- 仅对对象类型有效
- 对象为ref()类型时, 会自动解包, 出以下情况
  - 响应式数组`reactive([ref('Vue 3 Guide')])`
  - 原生集合, 如`reactive(new Map('count', ref(0)))`
  > 需要.value访问

## ref()

- 定义[响应式]变量
- 通过.value访问内部的值

```js
const count = ref(0);
console.log(count.value);
```

## computed()

- computed(getter): 定义只读响应式对象
  - getter: [函数对象], 返回响应式对象表达式 
- computed({get: getter, set: setter}): 定义可写响应式对象
  - getter: [函数对象], 返回响应式对象表达式
  - setter: [函数对象], 设置响应式对象

只读计算属性ref

```js
const count = ref(0);
const plusOne = computed(() => count.value + 1);  // plusOne.value = 1
plusOne.value++; // error
console.log(plusOne.value);  // 1
count.value++;  // 1
console.log(plusOne.value);  // 2
```

可写计算属性ref

```js
const count = ref(1);
const plusOne = computed({
    get: () => count.value + 1,
    set: (val) => count.value = val - 1
})
```

## setup()

- 要在template中使用响应式对象, 需要setup()函数定义并返回一个对象

```js
import { reactive } from 'vue'
export default {
    setup() {
        const state = reactive({count: 0});
        function increment() {
            state.count++;
        }
        return {
            state,
            increment
        }
    }
}
<div>{{state.count}}</div>
```

- 单文件组件`<script setup>`中的变量和函数可以在同一组件中的template中直接使用

## watchEffect()

- 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

