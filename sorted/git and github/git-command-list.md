# Git Command

- [git restore](#git-restore)
- [git status](#git-status)
- [git stash](#git-stash)
- [git merge](#git-merge)
- [git revert](#git-revert)
- [git reset](#git-reset)
- [git clean](#git-clean)
- [git checkout](#git-checkout)
- [git cherry-pick](#git-cherry-pick)
- [git add](#git-add)
- [git rebase](#git-rebase)

## git restore

- 恢复工作区的指定文件

example

- switch master
- reverts the makefile to two versions back
- delete hello.c by mistake
- gets it back from [index]()

```bash
git switch -c master
git restore --source master~2 Makefile
rm -f hello.c
git restore hello.c
```

## git status

- check current status of working directory

## git stash

- save current working directory to a dirty working directory
- secenario: when you want to record current working state and check a commit, but you don't want to create a commit for current changes

`git stash push`: save current modification to a temporary directory, and restore to HEAD status

- Add default description: `WIP on branchname: commitid "commit message"`
- `git stash push -m "message"`: save current modification to a temporary directory, and restore to HEAD status, and add a `message`
- `git stash`: equilevant `git stash push`

`git stash list`: check the list of temporary directory

`git stash apply`: apply the most recent file snapshot in the temporary directory

- `git stash apply --index <index>`: apply specific file snapshot in temporary directory by index
- through `git stash list` you can check `index` value
- `git stash apply --index 0`: 应用最近一次临时目录中的文件快照

`git stash pop`: apply the most recent file snapshot in the temporary directory, and delete the snapshot

## git merge

[merge](git-merge.md)


## git revert

- `git revert <commit>`: 撤销指定的commit所做的修改, 生成一个新的commit

## git reset

[reset](git-command-reset.md)
## git clean

- 删除未被追踪的文件

## git checkout

- `git checkout <branch>`
- `git checkout -b <new-branch>`: 同`git branch <new-branch>`
- `git checkout -detach [<branch>]`: 开始在commit or branch之上工作,
  - 保留工作树中的本地更改
  - 当前工作树的状态: 提交记录(commit record) + 本地修改(local modifications)
- `git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-fil-nul]`: overwrite files match the pathspec, 通过指定文件路径覆盖指定的文件
  - `<tree-ish>`: most often a commit
  - 用`<tree-ish>`的`<file>`文件覆盖工作树的`<file>`文件
- `git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>...]`
  - 通过[交互式模式](git-interactively-mode.md)完成文件覆盖操作

options

- `-f`: 切换分支时，即使index或working tree 与HEAD不同, 即使其中有untracked file, 用来丢弃本地更改和untracked file or directory的方式

## git cherry-pick

- `git cherry-pick <commit>`: 应用指定的commit的修改到[HEAD](git-concept.md#head)

## git add

## git rebase


