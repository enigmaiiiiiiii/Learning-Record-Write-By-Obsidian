# Linux - File Management

* [File Permission Command](#file-permission-command)
* [Check File With Details](#check-file-with-details)
* [Query File Type](#query-file-type)
* [Change File Owner](#change-file-owner)
* [File Link](#file-link)
* [Search File](#search-file)
* [Which](#which)
* [whereis](#whereis)
* [Handle Path](#handle-path)

## File Permission Command

- `chgrp`: change group ownership
- [chown](linux-command-chown.md): change file owner
- [chmod](linux-command-chmod.md): change file access permissions, like read, write, SUID, etc. 

## Check File With Details

```sh
ls -al
```

## Query File Type

with command `file`

- determine the type of all file in current directory

```bash
file *
```

- output [mime type](computer-network-mime-type.md)

```sh
$ file --mime-type test.js
test.js: text/plain
```

- handle symbolic link with `-L` option

```sh
$ file --mime-type -L link_symbol
```

- `-b, --brief` do not prepend filenames to output lines

> useful in shell scripts

```sh
$ file --mime-type -b index.html
text/html
```

## Change File Owner

`chown [OPTION] ... [OWNER][:[GROUP]] FILE ...`

modify file owner to `[OWNER]`，owner group to `[GROUP]`

```bash
chown username:groupname file
```

options

- `-R`: recursive, process all files and subdirectories in the specified directory together

## File Link

Create link

- [ln](linux-ln.md)

Get Link target

- `readlink [options] file`

## Search File

[locate](linux-locate.md)

[find](linux-find.md)

## Which

`which [options] [--] programname ...`

- locate a command

## whereis

- locate a command's binary, source, manual file

```shell
whereis [options] [-BMS directory ... -f] name
```

- `-b`: only find binary file
- `-m`: only find [manual file]()
- `-s`: only find source file
- `-u`

## Handle Path

[handle path](linux-command-handle-path.md)

