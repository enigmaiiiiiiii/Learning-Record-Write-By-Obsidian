# File Manage

## file

- determine file type

```bash
file *
```
determine the type of all file in current directory

查看当前目录下所有文件的类型

## chown

`chown [OPTION] ... [OWNER][:[GROUP]] FILE ...`

修改文件的所有者为owner，所属群组为group

```bash
chown username:groupname file
```

options

- `-R`: 递归处理，将指定目录下的所有文件及子目录一并处理


