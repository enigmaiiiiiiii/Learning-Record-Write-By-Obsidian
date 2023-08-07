# linux System Directory

* [/bin](#bin)
* [/usr](#usr)
* [/boot(not really understand)](#bootnot-really-understand)
* [/dev](#dev)
* [/etc](#etc)
* [/home](#home)
* [/lib](#lib)
* [/media](#media)
* [/mnt](#mnt)
* [/opt](#opt)
* [/proc](#proc)
* [/root](#root)
* [/sbin](#sbin)
* [/sys](#sys)
* [/tmp](#tmp)
* [/usr/bin](#usrbin)
* [/usr/sbin](#usrsbin)
* [/usr/src](#usrsrc)
* [/var](#var)
* [some other directory may have](#some-other-directory-may-have)
* [Summary](#summary)

## /bin

- stands for [binary](executable-file.md)
- basic system function for all user
- like `ls`, `cp`, `mv`, `mkdir`

vs /usr/bin

- user's program

## /usr

- Abbeviations of unix system resources
- Stores programs and data for all users

> Like `Program Files` in windows

/usr/local

## /boot(not really understand)

- ...

## /dev

- device driver

`/dev/null`

- a special file that discards all data written to it

`dev/stdin`, `dev/stdout`, `dev/stderr`

- special file link to [`/proc/self/fd/0`, `/proc/self/fd/1`, `/proc/self/fd/2`](linux-file-descriptor.md#3-standard-file-descriptors)

## /etc

- system related **configuration** files
- no binary here
- it is recommended to backup this directory

Useful files in this directory

- `/etc/passwd`: store user's information
- `/etc/shadow`: store user's password
- `/etc/profile`: [set environment variable](linux-system-environment.md)
- `/etc/hosts`: map hostname to locally ip addresses on without external [DNS](computer-network-dns.md)

```
127.0.0.1    localhost example.com 
::1 localhost ip6-localhost ip6-loopback
```

## /home

- **cd ~** enter home directory
- user's main directory
- every user have a directory whose name is same as user's name

## /lib

- lib is abbreviation of library
- like .dll in windows

## /media

- ...

## /mnt

- mount
- ...

## /opt

- for add-on software packages
- for packages who are not part of [package management system](linux-software-install.md)

## /proc

> `proc` is abbreviation of process

- `/proc` is a pseudo-filesystem
- content in this directory is not in **hard disk** but in **memory**

`/proc/self`

- a symbolic link to the process directory of the current process

## /root

- 该目录为系统管理员，也称作超级权限者的用户主目录。

## /sbin

- Stand For System [Binary](executable-file.md)
- executable files used by system administrator or root user
- and system [daemons](linux-daemon.md) or [services]()
- like `fdisk`, `ifconfig`, `shutdown`

## /sys

- 这是 linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs
- sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统
- 该文件系统是内核设备树的一个直观反映
- 当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建

## /tmp

- tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。

## /usr/bin

- 系统用户使用的应用程序。

## /usr/sbin

- 超级用户使用的比较高级的管理程序和系统守护程序。

## /usr/src

- 内核源代码默认的放置目录。

## /var

- variable data files that change over time
- commnon directory
  - `/var/log`: log files
  - `/var/run`: typically holds process id files and socket files

## some other directory may have

/run

- 是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

- /selinux
- /lost+found

## Summary

- root directory:"/" `cd /` , enter root directory
- user directory: "~", enter user directory

![linux1](/image/linux-directory-structure.png)
