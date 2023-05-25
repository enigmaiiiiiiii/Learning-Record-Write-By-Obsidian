# Object types

## Array

- type like `number[]` or `string[]`
- this is just a shorthand for `Array<number>` or `Array<string>`

## tuple

- another type of array whose:
  - length is fixed
  - elements type is known

declare a tuple type

```ts
type StringNumberPair = [string, number];
```