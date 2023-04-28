# ECMAScript Module Export

* [feature](#feature)
* [default export](#default-export)
* [named export](#named-export)
* [re-export/aggregation export](#re-exportaggregation-export)
* [Syntax](#syntax)

## feature

- function, variable, class can be export
- must at the top level
- can't be use inside function
- can be export before declaration

## default export

- one module can have **only one** default export

```js
export default function() { ... }
```

- can use any name when import

## named export

- one module can have multiple named exports

```js
export { myfunction, myVariable }
```

- must use export name when import

## re-export/aggregation export

- to increase the modularity of your code, you can re-export in an parent module

`export from` import and export，

- `fooA`, `fooB` is not available in current module

```js
export {default as fooA, fooB} from "bar.js";
```

sperate `import`and `export`，

- then `fooA`, `fooB` can be used in current module

```javascript
import {default as fooA, fooB} from 'bar.js';
export {fooA, fooB};
```

## Syntax

export declaration

```javascript
// Exporting declarations
export let name1, name2/*, … */; // also var
export const name1 = 1, name2 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;
```
导出列表

```javascript
// Export list
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };
```
默认导出

```javascript
// Default exports
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }
```

聚合模块: 将多个模块聚合到一个模块中

- export moduleA with file scope
- export moduleB with nameb, 在其它模块中使用 `agg.nameb` 访问
- export moduleC
- export moduleD
- export moduleE

agg.js

```js
// Aggregating modules
export * from "moduleA";
export * as nameb from "moduleB";
export { name1, /* …, */ nameN } from "moduleC";
export { import1 as named, import2 as named2, /* …, */ nameN } from "moduleD";
export { default, /* …, */ } from "moduleE";
```
