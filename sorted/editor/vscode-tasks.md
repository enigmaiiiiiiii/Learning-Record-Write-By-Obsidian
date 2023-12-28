# VSCode - Task

## what is this

- automate jobs inside and outside the development loop
- Lots of tools exist to automate tasks like linting, building, packaging, testing
  - Compiler like: Typescript Compiler
  - Linters like: ESLint, TSLint
  - build system: Make, Ant, Gulp, MSBuild
- use task to **run scripts** and **launch programs**

## Create Task

- Terminal -> Configure Tasks -> Create tasks.json file from template -> Others

```json
{
  "version": "2.0.0",
  "task": [
    {
      "type": "npm",
      "script": "lint",
      "problemMatcher": ["$eslint-stylish"]
    }
  ]
}
```

- this let vscode run `npm run lint`

## Run Task

- Command Palette -> Run Task

## Create Custom Task

- this will create a `Run tests` task when run task command in vscode

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run tests",
      "type": "shell",
      "command": "./scripts/test.sh",
      "windows": {
        "command": ".\\scripts\\test.cmd"
      },
      "group": "test",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
```

- `label`: the name displayed in UI
- `type`: can be *shell script* or *process*
  - shell: use shell run script, eg. bash, cmd, PowerShell
  - process: eg. `node`, `npm`, `python`
- **`command`**: the command to run
- `windows`: 
- `group`: group name
- `persentation`: how to handle the output, sub attributes:
  - `reveal` available values
    - `always`: always show the output
    - `never`:
    - `silent`: 
  - `panel` available values
    - new: create new terminal
    - shared
    - dedicated
    - current
  - `close` available values
    - `true`: close the terminal after the task is complete
    - `false`: default value, keep the terminal open
- `options`
- `runoptions`

