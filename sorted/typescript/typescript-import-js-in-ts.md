# TypeScript - import .js library in .ts file 

## how typescript search type

- When import javascript library `jslibname`, typescript has no way to know what types of a variable
- Then typescript will look for corresponding `jslibname.d.ts` file 

## Preparation

directory structure

```
.
├── main.ts
├── script.ts
├── package.json
├── tsconfig.json
└── types
    ├── main.d.ts
    └── main.js
```

main.ts

```ts
export type Point = {
    x: number,
    y: number
}
export function getPoint(x: number, y: number): Point {
    return {x, y}
}
```

create `main.d.ts` and `main.js` from main.ts

```sh
npx tsc main.ts --declaration --emitDeclarationOnly --declarationMap --outDir types
```

## Import Js Library

import `main.js` in `script.ts`

```ts
import { getPoint } from './types/main'

getPoint(3, 5)
```
