# Practical Command of Git

* [Check Commit Log](#check-commit-log)
* [Undo commit](#undo-commit)
* [remove file from stage](#remove-file-from-stage)
* [discard all local changes](#discard-all-local-changes)
* [check staged files](#check-staged-files)
* [set HEAD to specified status](#set-head-to-specified-status)
* [found forgotten files after commit](#found-forgotten-files-after-commit)
* [temporarily save current modification](#temporarily-save-current-modification)
* [check all branches](#check-all-branches)
* [Resovle Conflict](#resovle-conflict)

## 

## print merges commit log

```bash
git log --merges
```

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

## Undo commit

```bash
git reset [--soft | --mixed [-N] | --hard |--merge | --keep] [-q] <commitid>
```

- `--soft`: 撤销git commit, 不撤销git add, 保留改动代码
- `--mixed`: 撤销git commit, 撤销git add, 保留改动代码
- `--hard`: 撤销git commit, 撤销git add, 撤销改动代码

## remove file from stage

```bash
git rm --cached [<file>...]
git rm --cached -r [<dir>...] # recursive remove
```

## discard all local changes

```shell
git reset --hard # 丢弃跟踪的文件的所有本地改动, 撤销跟踪的文件
git clean -fxd # 删除未跟踪的文件
```
## check staged files

```bash
git ls-files
```

## set HEAD to specified status

```bash
git reset --hard <commitid>
```

## found forgotten files after commit

```bash
git commit -m "commit with partial files"
git add <forgotten_file>
git commit --amend
```

## temporarily save current modification

- And go check other commits without committing current modification

temporarily store modification

```sh
git stash
```

暂存修改和新增的文件

```sh
git stash --include-untracked
```

恢复修改并删除暂存记录

```sh
git stash pop
```

## check all branches

- `git clone` 的 repository 使用`git branch` 查看分支时只显示本地分支

```bash
git branch -a
```

## Resovle Conflict
