# File Manage

* [File Permission Command](#file-permission-command)
* [file](#file)
* [chown](#chown)
* [ln](#ln)

## File Permission Command

- `chgrp`: change group ownership
- [chown](linux-command-chown.md): change file owner
- [chmod](linux-command-chmod.md): change file access permissions, like read, write, SUID, etc. 

## file

- determine file type

```bash
file *
```
determine the type of all file in current directory

## chown

`chown [OPTION] ... [OWNER][:[GROUP]] FILE ...`

modify file owner to `[OWNER]`，owner group to `[GROUP]`

```bash
chown username:groupname file
```

options

- `-R`: recursive, process all files and subdirectories in the specified directory together

## ln

- make links between files

default create hard link

- hard link: 目标必须存在
- Symbolic link: 可以指向任意文本

SYNOPSIS

`ln [OPTION]... [-T] TARGET LINK_NAME`

create file1 link to file2

```bash
ln -s file2 file1
```
