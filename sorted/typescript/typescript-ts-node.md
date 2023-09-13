# Typescript - Tools ts-node

## What It Is

- third party tools for compiling and running typescript file

## Feature

- ts-node **automatically** finds and loads tsconfig.json
- enable to directly run typescript code without precompiling
- search behavior same as `tsc`

## Configuration

in `tsconfig.json`

- specify config options in "ts-node" property

```json
{
  "ts-node": {
    "transpileOnly": true,

    "files": true,
    "compilerOptions": {
      "module": "commonjs"
    }
  }
}
```

## Run single .ts file

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

## Practical Use

run single script in project with package.json

- use `--skipProject` to skip loading `tsconfig.json`

```s
ts-node --skipProject script.ts
```

