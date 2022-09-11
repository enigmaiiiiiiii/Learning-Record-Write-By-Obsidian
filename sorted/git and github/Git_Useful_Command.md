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

```shell
git reset [--soft | --mixed [-N] | --hard |--merge | --keep] [-q] <commitid>
```

- --soft: 撤销git commit, 不撤销git add, 保留改动代码
- --mixed:  撤销git commit, 撤销git add, 保留改动代码
- --hard: 撤销git commit, 撤销git add, 撤销改动代码

## 将文件移出暂存区

```shell
git rm --cached [<file>...]
```

## 丢掉本地所有改动

```shell
git reset --hard
git clean -fxd
```