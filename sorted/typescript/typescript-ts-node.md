# ts-node

## Feature

- ts-node **automatically** finds and loads tsconfig.json
- search behavior same as `tsc`

## Configuration

Via `tsconfig.json`

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

## Practical Use

run single script in project with package.json

- use `--skipProject` to skip loading `tsconfig.json`

```s
ts-node --skipProject script.ts
```