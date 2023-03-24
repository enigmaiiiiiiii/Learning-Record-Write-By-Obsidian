# React Lazy Loading

## create lazy loading

basiclly need two steps

1. create react component

```jsx
export default function Foo() {
  return <div>lazy Component</div>;
}
```

2. lazy load it

- use [lazy function](#function-lazy)
- parameter for lazy function is a function ruturn a [dynamic import](javascript-ecma-dynamic-import.md) object

```js
import { lazy } from 'react';

// () => import('./Foo.js') is a the function
const lazyFoo = lazy(() => import('./Foo.js'));
```

3. Suspense the component

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <lazyFoo />
</Suspense>
```

## usually do some work before lazy load

```js
const lazyFoo = lazy(() => {
  return new Promise((resolve) => {
    resolve('somework')
  }).then(() => import('./Foo.js'))
});
```

## function lazy

`lazy(load)`
