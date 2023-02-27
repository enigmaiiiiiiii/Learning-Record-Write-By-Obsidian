# Branch

- [Branch](#branch)
  - [Git Commit](#git-commit)
  - [新建Branch](#新建branch)
  - [切换Branch](#切换branch)
  - [合并branch](#合并branch)
    - [解决冲突](#解决冲突)
  - [删除分支](#删除分支)
  - [管理分支](#管理分支)
  - [Branch workflow](#branch-workflow)
  - [HEAD指针](#head指针)

## Git Commit

- commit时保存[暂存区]的[文件快照]的指针

假设有一个含有三个文件的目录, 将所有文件加入stage area, 并commit, 当使用git commit时

- Git检查(checksums)每一个子目录并保存为一个tree Object到Git repository;
- 创建一个新的commit Object, 和一个指向root project tree的指针;
- 此时，git repository中包含5个对象:
  - 三个blob(文件内容)
  - 一个树结构: 包含目录内的文件，并说明那些文件是blob
  - 一个commit: 包含commit元数据和指向root tree的指针

继续commit:

- commit包含一个指向前一个commit的指针

## 新建Branch

```bash
git branch <branch_name>
```

`git branch`发生了什么

- 创建了一个新的指针代表当前commit

> new branch $\rightarrow$ current commit

## 切换Branch

- `git switch <branch>`: 切换到指定的branch
  - 使用**git switch**切换前，如果工作目录或暂存区有**未提交修改**，则**不允许切换**
- `git checkout <branch>` 
  - 如果工作目录或暂存区有未提交修改，**也可以切换**
  - 这条命令做了两件事
    - 将HEAD指向指定的branch
    - 将文件状态恢复到指定的branch

> git log 并不显示所有branch

## 合并branch

merge基本用法 如: 合并到master

1. 切换到master分支
2. `git merge <branch>`, branch要合并的分支名称

- 一般合并会用到三个快照: **两个分支末端**和作为合并基准的**共同祖先**
- git会决定使用哪个祖先作为最佳合并基准
- fast-forward: 如果想要合并的commit可以直接回溯到当前目前所在的commit, Git直接将指针向前推进

## Resolved Conflict



## 删除分支

- `git branch -d <branch>`

## 管理分支

- `git branch`: 显示所有分支名称
- `git branch -a`: 显示所有分支名称, 包括远程分支

***

- `git branch -v`: 显示分支名称和最后一次提交信息
- `git branch --merged <branch>`: 查看**branch**合并过的分支, 省略branch默认为当前分支
- `git branch --no-merged <branch>`: 查看branch未合并过的分支, 省略branch默认为当前分支

***

- `git branch -d <branch>`: 删除分支
- `git branch --move <branch> <new-branch-name>`: 改变分支名称

改变本地分支名称后，删除远程旧分支:

- `git push --set-upstream origin <newbranch>`: 让其他人看到改变后的分支
- `git push origin --delete <branch>`: 删除远程旧分支

## Branch workflow

Long-running Branches - 工作方式

- 大多数开发者采用的方式: master是稳定的分支, 同时另一个并行分支命名为develop或next

Topic Branch - 工作方式

- is a short-lived branch
- VCS before to create a branch is expensive
- in Git, it's common to create, work on, merge, and delete branches several times a day
- keep changes for minutes, days, or months, and merge when ready

## HEAD指针

[Head指针](git-reference-head.md)