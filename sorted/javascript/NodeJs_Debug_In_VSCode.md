# Debug NodeJS In VSCode

## use javascript Debug Terminal

start javascript terminal debugger

- VSCode Command Palette -> `Debug: JavaScript Debug Terminal`

Create breakpoint

- VSCode Command Palette -> `Debug: inline Breakpoint`

Start script JavaScript Debug Terminal

```bash
node script.js
```

## configure launch.json

launch.json Attribute for Node.js Debugger

- `"outFiles"`
- `"timeout"`
- `"stopOnEntry"`
- `"remoteRoot"`
- `skipFiles"`: 自动跳过的文件

only available for request type [`launch`](/sorted/editor/VSCode-launch-json.md#debug-mode)

- `"program"`: the absolute path to the Node.js program to debug
- `"args"`: the arguments pass to the app
- `"env"`:

only available for request type [`attach`](/sorted/editor/VSCode-launch-json.md#debug-mode)

- `"restart"`
- `"port"`:
- `"address"`
- `"processId"`: try to attach to a process with this id
  - enable attach to an already runnig process
  - when this attribute was used, `"port"` will automatically determined
- `"continueOnAttatch"`