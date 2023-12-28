# vscode - launch.json compound keyword

[`launch.json`](vscode-launch-json.md) File

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

- top level `configurations`: list of startup items
- `compounds`: compound startup configurations
  - `configurations`: list of `name` of startup items in top level `configurations`
- `preLaunchTask`: task launched before startup, available values are label in [task.json](vscode-tasks.md)
