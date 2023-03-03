# NodeJs Buffer

## what it is?

- global type for dealing with **binary data** directly

take a look

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5, 'a');
console.log(buf);
// <Buffer 61 61 61 61 61>
```

## alloc a buffer

`alloc(size[, fill[, encoding]])`

- fill: a value to prefill the new buffer, default: 0;
