# Linux - Network Command

* [network status](#network-status)
* [telnet](#telnet)
* [scp](#scp)
* [ftp](#ftp)
* [lftp](#lftp)
* [gaim](#gaim)
* [tcpdump](#tcpdump)


## network status

[netstat](linux-netstat.md)

## remote connection

[telnet](telnet.md)

## firewall manager

[firewalld](linux-firewalld.md)

[ufw](linux-ufw.md)

## Network Interface

[ifconfig]

[ip](linux-command-ip.md)

## scp

- OpenSSH secure file copy

```bash
scp file/path [user@]host:[remote/filename]
```

- path/of/file: local file path
- user: remote host user name
- host: remote host ip address or domain name
- remote/filename: remote file path

options

- r: recursive copy

## ftp

`-n`:  no auto login

connect to ftp server

- `ftp [hostname] | [ip-address]`
- `ftp 192.168.1.1`

download file

- `get [remote/file/path]`: single file
- `mget [remote/directory/path]`: all files in directory

upload file

- put
- mput

## lftp

## gaim

## tcpdump

- data [packet capture]() tool
