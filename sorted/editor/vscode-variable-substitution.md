# variable subsitution

- to reference variable `foo`: `${foo}`

## Variable List

- ${userHome}
- ${workspaceFolder}: the opening directory path of vscode

## use task.json check variable

[task.json](vscode-tasks.md)

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
                "command": "echo ${VariableName}"
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