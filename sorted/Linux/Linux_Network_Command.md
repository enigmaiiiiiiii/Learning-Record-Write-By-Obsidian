# 网络命令

[查看网络状态](#查看网络状态)
[telnet](#telnet)
[ftp](#ftp)
[lftp](#lftp)
[gaim](#gaim)
[数据包截获工具](#数据包截获工具)
[curl](#curl)


## 查看网络状态

- [[netstat]]

## telnet

[telnet](telnet.md)

## ftp

`-n`:  不使用自动登录

连接ftp服务器

- `ftp [hostname] | [ip-address]`
- `ftp 192.168.1.1`

下载文件

- `get [远程路径]`: 单个文件
- `mget [远程目录]`: 目录下的所有文件

上传文件

- put
- mput

## lftp

## gaim

## 数据包截获工具

- tcpdump

## curl

- 不使用UI界面, 向url发送数据的工具

语法: 

`curl [options] [url]`

输出文件名是远程文件名

```bash
curl -O, --remote-name [url]
```



