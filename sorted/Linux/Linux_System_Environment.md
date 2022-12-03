# System Environment

[PATH](#path)
[etc/profile](#etcprofile)

## PATH

## etc/profile

- 系统变量

## etc/profiel.d

- /etc/profile还将执行/etc/profile.d/*.sh中的脚本
- 设置自己的系统范围的环境变量，建议将配置放在/etc/profile.d中的shell脚本中
- /etc/profile只对交互shell执行

## /etc/bashrc

- `/etc/bashrc`对交互和非交互shell都执行
- 在Ubuntu中`/etc/profile`直接调用`/etc/bashrc`
