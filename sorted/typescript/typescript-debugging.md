# TypeScript - Debugging

## With VSCode

Minimal configuration, for example single file `main.ts`

- package.json

```json
{
    "scripts": {
        "build": "npx tsc"
    }
}
```

- ./tsconfig.json
  - [`sourceMap`](typescript-tsconfig-fields.md) is critical for debugging

```json
{
  "include": ["main.ts"],
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true
    "outDir": "out"
  }
}
```

- [.vscode/launch.json](vscode-launch-json.md)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/main.ts",
      "preLaunchTask": "npm: build",
      "outFiles": [
        "${workspaceFolder}/out/**/*.js"
      ]
    }
  ]
}
```

- `"outDir"` in `tsconfig.json` and `"outFiles"` in `.vscode/launch.json` even not required in minimal debug config 
- but it's common way to use `outDir` and `outFiles` to separate source code and compiled code

