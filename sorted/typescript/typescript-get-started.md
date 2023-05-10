# get start

* [Install](#install)
* [CLI Tools](#cli-tools)
* [compile single .ts file to js:](#compile-single-ts-file-to-js)
* [run single .ts file](#run-single-ts-file)
* [index.d.ts](#indexdts)

## Install

**Install** typescript globally:

```bash
npm install -g typescript
npm install -g ts-node
```

**Install** typescript in my project:

```bash
npm install -D typescript
npm install -D ts-node
```

## CLI Tools

[ts-node](typescript-ts-node.md)

## compile single .ts file to js:

`tsc`: compile ts to js

```bash
tsc script.ts
```

## run single .ts file

use `ts-node`: compile and run

> **excute** a script as `node` + `tsc`

```s
ts-node script.ts
```

run single script in project with package.json

- use `--skipProject` to skip loading `tsconfig.json`

```s
ts-node --skipProject script.ts
```

## index.d.ts

create `index.d.ts` for a module

1. add tsconfig.json

```json
{
  // Change this to match your project
  "include": ["src/**/*"],
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

2. compile

```sh
npx tsc
```


