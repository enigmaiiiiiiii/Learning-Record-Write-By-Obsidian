# vscode launch.json

* [location](#location)
* [take a look](#take-a-look)
* [launch.json Configurations Field Attributes](#launch.json-configurations-field-attributes)
* [Debug Mode](#debug-mode)

## location

`${workspace}/.vscode/launch.json`

## Take A Look

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

## launch.json Configurations Field Attributes

MANDATORY for every launch configuration

- `"type"`: the type of the app, `"node"` for built-in node debugger
- `"request"`
  - `launch` 
  - `attach`: attach to a running process
- `"name"`: Display name of Debug window

Attributes that most debugger support

- `"program"`: the entry file of the app
- `"args"`: the arguments **pass to the app**
- `"cwd"`: current working directory of the app
- `runtimeExecutable` and `runtimeArgs`: 
  - for example, if want to debug program `npm run dev`
    - `"runtimeExecutable"` is `npm`
    - `"runtimeArgs"` is `["run", "dev"]` 
  - if i know exactly which command to debug, i do not have to set `program`

Attributes only for `"request": "launch"`

- `outputCapture`
  - `"console"`: capture output from the vscode debugger console
  - `"std"`: capture output from the app's stdout and stderr

For Java

`"vmargs"`: the [arguments](java-command-java-options.md) pass to the Java

## Debug Mode

- Attach
- Launch

