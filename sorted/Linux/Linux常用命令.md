## 1. Linux基础命令

- `man`

## 文件管理

- `ls`
- `cat`
  - 显示单个或多个文件内容
  - 创建文件
- `cd`
- `find`
- `mkdir`
- `rmdir`
- `touch`
- `cp`
  复制文件或目录
  > cp source directory
- `mv`
  用于文件移动，重命名
  例:
  > mv [文件/文件夹] [文件夹] 文件或文件夹移动
- `rm`
- `tree` 列出文件树状图
  用于查找**内容**包含指定的范本样式的文件
- `head` 显示文件开头部分
- `grep`

  > `grep test *file`  在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行

  - 从文件内容查找匹配字符串的行
    - $ `grep` "被查找的字符串" 文件名
  - 从文件内中查找与正则表达式匹配的行
    - $ `grep -e` "正则表达式" 文件名
  - 查找匹配的行数/
    - $ `grep -c` "被查找的字符串" 文件名
  - 从文件内容中查找不匹配字符串的行数
    - $ `grep -v` "被查找的字符串" 文件名
  利用grep和find命令查找文件内容：
  - <font color = "red">从根目录开始查找所有扩展名为.log的文本文件，并找出包含"ERROR"的行</font>
    - $ `find / -typr f -name "*.log" | xargsgrep "ERROR"`
      xargs给命令传递参数的一个过滤器，也是组合多个命令的工具 
      
## 系统管理


- `shutdown`
- `reboot`
- `apt` 安装软件
- `chown` change owner, 用于设置文件所有者和文件关联组的命令
- `chmod` change mode 控制用户对文件的权限的命令
- `su` switch user切换用户

## 网络

- `arp`:查看和修改ARP高速缓存, 主机内ARP table中存储着其他主机的MAC地址
- `nestat`显示网络状态

## 压缩

- `tar`

## 详见

[[apt]] 

[[echo]]

[[ls]]

[[ps]]

[[kill]]

[[chown]]

[[chmod]]

[[touch]]

[[passwd]]

[[netstat]]