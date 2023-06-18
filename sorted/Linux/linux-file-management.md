# Linux - File Management

* [File Permission Command](#file-permission-command)
* [Check File With Details](#check-file-with-details)
* [Query File Type](#query-file-type)
* [chown](#chown)
* [File Link](#file-link)

## File Permission Command

- `chgrp`: change group ownership
- [chown](linux-command-chown.md): change file owner
- [chmod](linux-command-chmod.md): change file access permissions, like read, write, SUID, etc. 

## Check File With Details

```sh
ls -al
```

## Query File Type

- determine file type

```bash
file *
```
determine the type of all file in current directory

## Change File Owner

`chown [OPTION] ... [OWNER][:[GROUP]] FILE ...`

modify file owner to `[OWNER]`，owner group to `[GROUP]`

```bash
chown username:groupname file
```

options

- `-R`: recursive, process all files and subdirectories in the specified directory together

## File Link

[ln](linux-ln.md)

## Search File

[locate](linux-locate.md)

## Which

`which [options] [--] programname ...`

- locate a command

## whereis

- locate a command's binary, source, manual file

```shell
whereis [options] [-BMS directory ... -f] name
```

- `-b`:  只找binary的文档
- `-m`:  只找在说明文件路径下的文件
- `-s`: 只找source 来源文件
- `-u`: 没有说明档的文件

