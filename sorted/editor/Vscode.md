# Vscode

## 同时启动多个项目配置方式

[同时启动多个项目](Vscode_Compound_Launch_Configurations.md)

## vscode 中的任务

[vscode 中的任务](Vscode_Tasks.md)

## launch.json和task.json配置中的预定义vscode变量

[variable替换](Vscode_Variable_Substitution.md)

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