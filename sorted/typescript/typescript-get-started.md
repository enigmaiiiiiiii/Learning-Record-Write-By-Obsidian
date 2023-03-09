# get start

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

## compile single .ts file to js:

`tsc`: compile ts to js

```bash
tsc script.ts
```

## run single .ts file

`ts-node`: compile and run

> **excute** a script as `node` + `tsc`

```bash
ts-node script.ts
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


