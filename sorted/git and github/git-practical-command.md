# 实用命令

- [Resovle Conflict](#resovle-conflict)
- [Check Commit Log](#check-commit-log)
- [撤销已提交commit](#撤销已提交commit)
- [将文件移出暂存区](#将文件移出暂存区)
- [丢掉本地所有改动](#丢掉本地所有改动)
- [查看缓存区文件](#查看缓存区文件)
- [设置HEAD到指定状态](#设置head到指定状态)
- [提交后发现漏掉了文件](#提交后发现漏掉了文件)
- [取消修改文件](#取消修改文件)
- [暂存当前修改, 使我能去并查看其它commit, 而不需要commit当前修改](#暂存当前修改-使我能去并查看其它commit-而不需要commit当前修改)
- [查看所有分支](#查看所有分支)

## Resovle Conflict


## Check Commit Log


```bash
git log
```

```shell
commit d590a26b3b988f24842d433d4b64708ff545d399 (HEAD -> main)
Author: enigmaiiiiiiii <62017693+enigmaiiiiiiii@users.noreply.github.com>
Date:   Mon May 30 15:24:20 2022 +0800

    mainwindow.cpp : 608

commit fa552d867bb6615f049720adaf336faed2727a16 (origin/main)
Author: enigmaiiiiiiii <62017693+enigmaiiiiiiii@users.noreply.github.com>
Date:   Mon May 30 09:12:14 2022 +0800
```

commit id: d590a26b3b988f24842d433d4b64708ff545d399

## 撤销已提交commit

```bash
git reset [--soft | --mixed [-N] | --hard |--merge | --keep] [-q] <commitid>
```

- `--soft`: 撤销git commit, 不撤销git add, 保留改动代码
- `--mixed`: 撤销git commit, 撤销git add, 保留改动代码
- `--hard`: 撤销git commit, 撤销git add, 撤销改动代码

## 将文件移出暂存区

```bash
git rm --cached [<file>...]
git rm --cached -r [<dir>...] # 递归删除
```

## 丢掉本地所有改动

```shell
git reset --hard # 丢弃跟踪的文件的所有本地改动, 撤销跟踪的文件
git clean -fxd # 删除未跟踪的文件
```
## 查看缓存区文件

```bash
git ls-files
```

## 设置HEAD到指定状态

```bash
git reset --hard <commitid>
```
## 提交后发现漏掉了文件

```bash
git commit -m "commit with partial files"
git add <forgotten_file>
git commit --amend
```
## 取消修改文件

- 危险命令，会丢失未提交的本地修改

```bash
git checkout -- <file>
```

## 暂存当前修改, 使我能去并查看其它commit, 而不需要commit当前修改

暂存修改

```sh
git stash
```

恢复修改并删除暂存记录

```sh
git stash pop
```

## 查看所有分支

- `git clone` 的 repository 使用`git branch` 查看分支时只显示本地分支

```bash
git branch -a
```

