# 复合启动

launch.json 文件

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Server",
      "program": "${workspaceFolder}/server.js"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Client",
      "program": "${workspaceFolder}/client.js"
    }
  ],
  "compounds": [
    {
      "name": "Server/Client",
      "configurations": ["Server", "Client"],
      "preLaunchTask": "${defaultBuildTask}",
      "stopAll": true
    }
  ]
}
```

- configurations: 启动项配置
- compounds: 复合启动配置
  - configurations: 由几个启动项组成的数组
- preLaunchTask: 在启动前执行的任务, 取值为[task.json](vscode-tasks.md)中的label
