# Typescript - Create .d.ts File

About: create corresponding .d.ts file from ts file to js file

## Preparation

install typescript

directory structure

```
.
├── node_modules
├── main.ts
├── tsconfig.json
└── package.json
```

main.ts

```ts
type point = {
    x: number,
    y: number
}
function getPoint(x: number, y: number): point {
    return {x, y}
}
```

## Option 1: compile ts project

tsconfig.json

```json
{
  // Change this to match your project
  "include": ["./**/*"],
  "compilerOptions": {
    // Tells TypeScript to read JS files, as
    // normally they are ignored as source files
    "allowJs": true,
    // Generate d.ts files
    "declaration": true,
    // This compiler run should
    // only output d.ts files
    "emitDeclarationOnly": true,
    // Types should go into this directory.
    // Removing this would place the .d.ts files
    // next to the .js files
    "outDir": "dist",
    // go to js file when using IDE functions like
    // "Go to Definition" in VSCode
    "declarationMap": true
  }
}
```

compile project

```sh
npx tsc
```

## Option 2: compile single file

use [`--declaration` flag](typescript-hello-world.md#command-line-tools-tsc)

- for `main.ts` file

```sh
npx tsc main.ts --declaration
```

