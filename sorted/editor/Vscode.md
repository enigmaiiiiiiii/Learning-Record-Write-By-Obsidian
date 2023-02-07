# vscode

## my settings

[setting](vscode-settings.md)

[keybindings](vscode-keybindings.md)

## 同时启动多个项目配置方式

[同时启动多个项目](vscode-compound-launch-configurations.md)

## launch.json

[launch.json](vscode-launch-json.md)

## vscode 中的任务

[vscode 中的任务](vscode-tasks.md)

## launch.json和task.json配置中的预定义vscode变量

[variable替换](vscode-variable-substitution.md)

## vscode远程登录

crtl+shift+p -> Remote-SSH: Connect to Host

如虚拟机地址为192.168.231.16， 用户名为tmp，密码为123456

输入: ssh tmp@192.168.231.16 -A

## config proxy

```json
{
    "http.proxy": "http://proxy.server.com:port
}
```