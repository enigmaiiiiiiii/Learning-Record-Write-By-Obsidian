# Vue Component Data

- [take a look](#take-a-look)
- [data](#data)
- [computed](#computed)

## take a look

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ now }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      now: new Date().toLocaleString(),
    };
  },
  computed: {
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
```

## data

## computed

- when we want to use data for example:
  - in conditional expression
  - compute from other data

```vue
<p>Has published books:</p>
<span>{{author.books.length > 0 ? 'Yes': 'No'}}</span>
<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue.js',
          'React.js',
          'Angular.js'
        ]
      }
    }
  }
}
</script>
```

use computed instead of `<span>{{author.books.length > 0 ? 'Yes': 'No'}}</span>`

```vue
<p>Has published books:</p>
<span>{{publishedBooksMessage}}</span>
<script>
export default {
  data() {
    return {
      // ...
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes': 'No'
    }
  }
}
</script>
```