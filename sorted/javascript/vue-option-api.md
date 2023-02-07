# 选项式API

- 面向对象的编程方式
- data()返回一个对象，表示Vue实例的属性
- methods()一组函数，表示Vue实例的方法
- mounted()生命周期钩子，表示Vue实例被创建后执行的函数

```html:vue
<script>
    export default {
        data() {
            return {
                count: 0
            }
        },

        methods: {
            increment() {
                this.count++;
            }
        },

        mounted() {
            console.log(`the initial count is ${this.count}`);
        }
    }
</script>
<template>
    <button @click="increment">Count is {{count}}</button>
</template>
```