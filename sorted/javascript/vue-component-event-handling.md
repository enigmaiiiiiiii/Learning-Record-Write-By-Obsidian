# Vue Event Handling

## Listening to Events

use `v-on` directive or `@` shorthand

```vue
<template>
  <button v-on:click="handleClick">Click Me</button>
  <button @click="handleClick">Click Me</button>
</template>
```

## Methods

Declare methods into component

```vue
<script>
export default {
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
}
</script>
```
