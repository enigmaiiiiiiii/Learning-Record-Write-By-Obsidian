# 变量替换

- 使用${variableName}来引用变量
- ${userHome}
- ${workspaceFolder}: vscode 打开目录的路径

## 使用task.json查看变量

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