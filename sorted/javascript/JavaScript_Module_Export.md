# export

## feature

- 可以导出函数，变量，类
- 要放在最外层，不能使用在函数中
- 可以在声明之前export

## default export

- 一个模块中只能有一个默认导出

```js
export default function() { ... }
```

- 导入时可以使用任意名称

## 命名导出

- 一个模块可以用多个命名导出

```js
export {myfunction, myVariable}
```

- 导入时必须使用导出的名称

## 重导出/聚合导出

- 为了提高模块可用性，可以在一个父模块中**导入同时导出**不同的模块

export from导入导出方式，function1, function2 在当前模块**不可用**

```javascript
export {default as function1, function2} from "bar.js";
```

import, export分开，function1, function2 在当前模块可用

```javascript
import {default as function1, function2} from 'bar.js';
export {function1, function2};
```

## 语法

导出声明

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
