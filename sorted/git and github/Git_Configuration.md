# 配置git

- 通过git config命令: 获取和设置配置变量

查看所有设置: 

```shell
git config --list --show-origin
```

## 配置变量设置在3个地方

1. `[path]/etc/gitconfig` 文件: 包含系统上的每个用户及其所有存储库的值;`--system`进行设置, 需要管理员或超级用户权限才能对其进行更改。
2. `~/.gitconfig`文件: 用户配置文件，通过`--global`设置
3. `config`文件: 存储库配置文件, 特定于单个存储库, `--local`设置

> 内层都会覆盖外层设置

