# git命令

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

- 查看当前工作区的状态

## git stash

- 保存当前工作区的修改在一个 dirty working directory(临时目录)
- 使用场景: 像记录当前工作状态, 去查看一个已提交commit时, 又不想为当前更改创建一个commit时

`git stash push`: 保存当前修改到一个临时目录, 并恢复到HEAD状态

- 默认添加的描述是: `WIP on branchname: commitid "commit message"`
- `git stash push -m "message"`: 保存当前修改到一个临时目录, 并恢复到HEAD状态, 并添加一个message
- `git stash`: 同git stash push

`git stash list`: 查看当前临时目录中保存的文件快照

`git stash apply`: 应用最近一次保存的临时目录中的文件快照

- `git stash apply --index <index>`: 应用指定index的临时目录中的文件快照
- index可以通过`git stash list`查看
- `git stash apply --index 0`: 应用最近一次临时目录中的文件快照

`git stash pop`: 应用最近一次保存的临时目录中的文件快照, 并删除该临时快照

## git merge

- `git merge <commit>`: 将指定的commit的更改(包括历史更改)合并到当前分支
- `git merge -s <strategy>`: 通过-s选项指定合并策略, strategy取值:
  - ort: 默认策略, ort是合并算法的缩写
  - ours: 冲突时，保留当前分支的更改
  - ~~~theirs: 冲突时，保留合并分支的更改~~~

## git revert

- `git revert <commit>`: 撤销指定的commit所做的修改, 生成一个新的commit

## git reset

[reset](Git_Command_reset.md)
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
  - 通过[交互式模式](Git_Interactively_Mode.md)完成文件覆盖操作

options

- `-f`: 切换分支时，即使index或working tree 与HEAD不同, 即使其中有untracked file, 用来丢弃本地更改和untracked file or directory的方式

## git cherry-pick

- `git cherry-pick <commit>`: 应用指定的commit的修改到[HEAD](Git_Concept.md#HEAD)

## git add

## git rebase


