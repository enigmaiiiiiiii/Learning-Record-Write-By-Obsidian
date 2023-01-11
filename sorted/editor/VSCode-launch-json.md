# vscode launch.json

## location

`${workspace}/.vscode/launch.json`

## take a look

run and debug a simple app

- add `"configurations"` object

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
          "<node_internals>/**"
      ],
      "program": "${workspaceFolder}\\pages\\index.js"
    }
  ]
}
```

- `"program"`: the entry file of the app

## launch.json Attributes

mandatory for every launch configuration

- `"type"`: the type of the app, `"node"` for built-in node debugger
- `"request"`: `launch` or `attach`
- `"name"`: Debug window 展示的名称

大多数调试器支持的Attributes

- `"program"`: the entry file of the app
- `"args"`: the arguments pass to the app
- `"cwd"`: current working directory of the app


## Debug Mode

- Attach
- Launch

