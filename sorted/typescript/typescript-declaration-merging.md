# TypeScript - Declaration Merging

## Merging Interface

```ts
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
```

## Merging Namespace with Classes, Functions, Enums

With Classes

- this is a way to add inner class

```ts
class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export class AlbumLabel {}
}
```

- `export` is required 

With Functions

- This is like adding properties to a function

```ts
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel { 
  export let suffix = "";
  export let prefix = "Hello, ";
}
```

## Module Augmentation

use case

- when working with javascript, one can access to non-existent property of global object
- while in typescript, this will cause error, cause window has no property `fooApi`

```js

```js
window.fooApi
```


`observable.ts`

```ts
export class Observable<T> {
  // ...
}
```

`map.ts`

```ts
import { Observable } from "./observable";
declare module "./observable" {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}
```

`main.ts`

```ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map(x => x.toFixed());
```

Limitations:

1. can't declare new top-level declarations
2. can't augment [default exports](javascript-ecma-export.md#default-export)

## Global Augmentation

Add new property declaration to existing global type

```ts
declare global {
  interface Array<T> {
    foo(): any
  }
}

Array.prototype.foo = function() {
  // ...
};
```

