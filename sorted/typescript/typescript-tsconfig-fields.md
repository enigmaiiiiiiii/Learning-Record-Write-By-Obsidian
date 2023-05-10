# tsconfig Fields List

## strictNullChecks

- default: false
  - but can lead to unexpected errors at runtime
- if true: you **must guarantee** that variable is not null or undefined

## noImplicitAny

- default: false
- if true

this code will raise error

```ts
function fn(s) {
  console.log(s..subtr(3));
}
fn(42);
```
