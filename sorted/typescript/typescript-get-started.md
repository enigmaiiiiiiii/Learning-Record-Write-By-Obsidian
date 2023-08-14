# Typescript - get start

* [Install](#install)
* [CLI Tools](#cli-tools)
* [compile single .ts file to js:](#compile-single-ts-file-to-js)
* [run single .ts file](#run-single-ts-file)
* [index.d.ts](#indexdts)

## Install Typescript Compiler

**Install** typescript globally:

```bash
npm install -g typescript
```

**Install** typescript in my project:

```bash
npm install -D typescript
```

## Command Line Tools tsc

- Use to **compile ts to js**, not execute it
- Installed with typescript

For Globally Installed Typescript

```sh
tsc hello.ts
```

For Locally Installed Typescript

```sh
npx tsc hello.ts
```

## Third Party Tools

[ts-node](typescript-ts-node.md)

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


