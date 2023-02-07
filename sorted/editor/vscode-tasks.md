# 任务

- 通过vscode中的task可以配置为**运行脚本**和**启动程序**

## 自定义任务

1. Terminal -> Configure Tasks -> Create tasks.json file from template -> Others
2. 替换task.json中的内容

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

- label: 在UI界面中显示的名称
- type: 可以是shell或process
  - shell: 通过shell运行脚本, bash, cmd, PowerShell
  - process: 要执行的进程
- **command**: 要执行的命令
- windows: 命令行程序
- group: 分组，
- persentation: 如何处理任务输出
  - reveal取值
    - always: 总是显示输出
    - never
    - silent
  - panel取值
    - new: 创建新终端
    - shared
    - dedicated
    - current
- options
- runoptions