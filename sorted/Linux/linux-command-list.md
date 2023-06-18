# Linux - Command List

* [locate](#locate)
* [tools](#tools)
* [hot-key](#hot-key)
* [file management](#file-management)
* [System Management](#system-management)
* [Network](#network)
* [Dont Know How To Classify For Now](#dont-know-how-to-classify-for-now)

## locate

## tools

- `date` 显示日期
- `cal` 显示日历
- `bc` 计算器
- `man` manual操作说明

## hot-key

- `tab` 命令补全
- `ctrl + c`: 用于中断命令
- `ctrl + d`: 相当于exit，
- `ctrl + a`: 移动到行首
- `ctrl + u`: 删除全部输入

## file management

- `ls`
- `cat`
  - 显示单个或多个文件内容
  - 创建文件
- `cd`
- `find`
- `mkdir`
- `rm [-i/f/r] name`
  - `-i` 删除前询问
  - `-f` 强制删除，即使原档案属性设为只读, 也可删除
  - `-r` 删除目录和目录下的文件
- `rmdir` 删除空目录
- `touch`
- `cp`: 复制文件或目录, `cp source directory`
- `mv` 用于文件移动，重命名
- `tree` 列出文件树状图:用于查找**内容**包含指定的范本样式的文件
- `head` 显示文件开头部分
- `file *`: 查看当前目录下所有文件的类型

## System Management

- ps -aux 查看进程
- `shutdown`
- `reboot`
- `apt` 安装软件
- `chown` change owner, 用于设置文件所有者和文件关联组的命令
- `chmod` change mode 控制用户对文件的权限的命令
- `su` switch user切换用户

## Network

- `arp`:查看和修改ARP高速缓存, 主机内ARP table中存储着其他主机的MAC地址
- `nestat`显示网络状态