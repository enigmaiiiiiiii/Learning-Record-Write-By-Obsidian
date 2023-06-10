# Linux - Daemon Process

## What Is This

- background process
- no User Interface
- System services
- Controlled by Init System
- Run at high level of privilege to system resources
- They Are Daemon Process
  - sshd
  - httpd
  - mysqld

> [systemd](linux-systemd.md) is not a daemon

## Daemon Programming Rules

1. call [umask](linux-system-function-umask.md), change file permission mask, inherited file mode creation mask may be set to deny some permission

- 使守护进程可以创建组可读，组可写的文件

2. 调用 fork(), 父进程 exit()

- 如果守护进程是 shell 命令启动的，那么父进程终止会让 shell 认为命令已经执行完
- 虽然子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个进程组的组长

3. 调用[setsid](linux-process-relation.md#setsid)创建一个新的会话
4. 将当前目录更改为根目录, 从父进程处继承过来的当前工作目录可能在一个挂在的文件系统中。
5. 关闭不在需要的[文件描述符](linux-file-descriptor.md)

- 这使守护进程不在持有从其父进程继承来的任何文件描述符
- 可以使用`open_max()`函数或`getrlimit()`函数来判定最高文件描述符值

6. 某些守护进程打开/dev/null 使其具有文件描述符 0，1，2, 这样，任何一个试图读标准输入，写标准输出或标准错误的库例程都不会产生任何效果

translate above note to english


## 错误记录

[[记录守护进程的错误]]

## 惯例

