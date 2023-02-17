# Vue Component Props

## Declare Props

- use `[]` to define `props: ['size']`

`Demo.js`

```vue
<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  props: ['message']
}
</script>
```

## pass value to props

`App.vue`

```vue
<template>
  <Demo message="Hello World" />
</template>
<script>
import ComponentA from './ComponentA.vue'
export default {
  components: {
    ComponentA
  }
}
</script>
```

## passings dynamic props

use [`:`](vue-directives.md#v-bind) syntax

```vue
<BlogPost :title="post.title" />
```

## Declare Props With Validation

```js
export default {
  props: {
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true
    },
    propD: {
      type: Number,
      default: 100
    },
    propE: {
      type: Object,
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    propF: {
      validator(value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
    propG: {
      type: Function
      default() {
        return 'default function'
      }
    }
  }
}
```

by default

- required: true
- absent optional prop others than `Boolean` will be `undefined`
- Boolean prop will be `false`

## feature

- one way data flow

> parent property updates, it will flow down to the child, but not the other way around

```js
export default {
  props: ['foo'],
  created() {
    this.foo = 'bar'
  }
}
```
