# Branch

* [Git Commit](#git-commit)
* [Create New Branch](#create-new-branch)
* [Switch Branch](#switch-branch)
* [merge branch](#merge-branch)
* [Resolved Conflict](#resolved-conflict)
* [delete branch](#delete-branch)
* [manage branch](#manage-branch)
* [Branch workflow](#branch-workflow)
* [HEAD Pointer](#head-pointer)

## Create New Branch

```bash
git branch <branch_name>
```

what happen when `git branch`

- create a new pointer to current commit

> new branch $\rightarrow$ current commit

## Switch Branch

`git switch <branch>`

- **switching is not allowed**, if there are **uncommitted changes** in the working directory or staging area

`git checkout <branch>`

- **checkout can perform a switch**, even if working directory or staging area have uncommitted changes, 
- this command does two things
  - move `HEAD` to the specified `branch`
  - restore the file status to the specified branch

> git log will not show all branch

## Merge Branch

merge基本用法 如: 合并到master

1. 切换到master分支
2. `git merge <branch>`, branch要合并的分支名称

- 一般合并会用到三个快照: **两个分支末端**和作为合并基准的**共同祖先**
- git会决定使用哪个祖先作为最佳合并基准
- fast-forward: 如果想要合并的commit可以直接回溯到当前目前所在的commit, Git直接将指针向前推进

## Resolved Conflict



## delete branch

- `git branch -d <branch>`

## manage branch

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

Long-running Branches - Work Flow

- the way is applied by most developers: master is stable branch, and another parallel branch is named develop or next

Topic Branch - Work Flow

- is a short-lived branch
- VCS before to create a branch is expensive
- in Git, it's common to create, work on, merge, and delete branches several times a day
- keep changes for minutes, days, or months, and merge when ready

## HEAD Pointer

[Head Pointer](git-reference-head.md)
