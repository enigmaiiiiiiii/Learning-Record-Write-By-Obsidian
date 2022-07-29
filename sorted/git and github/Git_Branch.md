# Branch

## Git Commit

- commit时保存[暂存区]的[文件快照]的指针

假设有一个含有三个文件的目录, 将所有文件加入stage area, 并commit;  
当使用git commit时, Git检查(checksums)每一个子目录并保存为一个tree Object到Git repository;  
创建一个新的commit Object, 和一个指向root project tree的指针;
此时，git repository中包含5个对象:

- 三个blob(文件内容)
- 一个树结构: 包含目录内的文件，并说明那些文件是blob
- 一个commit: 包含commit元数据和指向root tree的指针

继续commit: 

- commit包含一个指向前一个commit的指针

## Git Branch发生了什么

- 创建了一个新的指向当前commit的指针

## HEAD指针

- HEAD指针指向当前commit

## 切换Branch

- `git checkout <branch>` 这条命令做了两件事
  - 将HEAD指向指定的branch
  - 将文件状态恢复到指定的branch
- 在切换分支前，如果工作目录或暂存区未提交修改，则不允许切换

> git log 并不显示所有branch

## 合并分支

- merge基本用法, 如合并到master: 1. 切换到master分支 2. `git merge <branch>`, branch要合并的分支名称
- 一般合并会用到三个快照: 两个分支末端和作为合并基准的共同祖先
- git会决定使用哪个祖先作为最佳合并基准
- fast-forward: 如果想要合并的commit可以直接回溯到当前目前所在的commit, Git直接将指针向前推进

### 解决冲突

## 删除分支

- `git branch -d <branch>`

## 管理分支

- `git branch`: 显示所有分支名称
- `git branch -v`: 显示分支名称和最后一次提交信息
- `git branch --merged <branch>`: 查看**branch**合并过的分支, 省略branch默认为当前分支
- `git branch --no-merged <branch>`: 查看branch未合并过的分支, 省略branch默认为当前分支

***

- `git branch -d <branch>`: 删除分支
- `git branch --move <branch> <new-branch-name>`: 改变分支名称

改变本地分支名称后，删除远程旧分支:

- `git push --set-upstream origin <newbranch>`: 让其他人看到改变后的分支
- `git push origin --delete <branch>`: 删除远程旧分支

## 相对引用

- `^`向上移动一个提交记录
- `~<num>`向上移动num个提交记录

```shell
git checkout HEAD^
git checkout main^^  # 有main分支向上移动两个节点
git checkout HEAD~3  # 从HEAD开始向上移动3个节点
git branch -f main HEAD^  # 强制修改main分支为HEAD的父节点
```
