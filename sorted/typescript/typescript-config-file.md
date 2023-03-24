# TSConfig

- TSConfig File可以命名为
  - **tsconfig.json**
  - or **jsconfig.js**
- TSConfig file in a directory indicate that the directory is the root of a TypeScript or JavaScript project.

Init a TSConfig file

```bash
tsc --init
```

## strict mode

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

- true: all on
- noImplicitAny:
- strictNullChecks: 是否处理null和undefined

## fields in tsconfig.json

[fields list](typescript-tsconfig-fields.md)
