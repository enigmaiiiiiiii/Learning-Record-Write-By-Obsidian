# TypeScript - CLI tsc 

## What It Is

- Use to **compile ts to js**, not execute it
- Installed with typescript

## Caveat

`npx tsc`

- compile based on backwards look through fs for [tsconfig.json]()

`npx tsc index.ts`

- emit JS js file for index.ts with default config
- no `tsconfig.json` file applied

`npx tsc --project tsconfig.production.json`

- emit file with `tsconfig.production.json` config
- specify config file can not used for single file

`npx tsc index.js --declaration --emitDeclarationOnly`

- emit .js file with showing [compiler options](#options)

`npx tsc app.ts util.ts --target esnext --outfile index.js`

- emit single .js file from two files with compiler options

## Options

## Compile Single File

For Globally Installed Typescript

```sh
tsc hello.ts
```

For Locally Installed Typescript

```sh
npx tsc hello.ts
```
