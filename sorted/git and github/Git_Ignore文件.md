# .gitingnore文件

- 用于从git库排除文件

```
/bin  # bin目录
bin/  # bin目录下的文件，不包括bin目录
.gitignore  # 忽略本身
```

- 排除以前提交过的而文件

```shell
git rm -r --cached .obsidian
```