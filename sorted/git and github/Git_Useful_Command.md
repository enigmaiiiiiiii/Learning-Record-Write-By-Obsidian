# 实用命令

## 提交日志

git log

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