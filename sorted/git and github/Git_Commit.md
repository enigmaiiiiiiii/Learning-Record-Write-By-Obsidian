# commit

- 表示提交的[快照]

## commit的相对引用

- 相对引用有指定名称, 如`HEAD`, `master`, 相对引用名 + 符号可以表示commit记录
- HEAD指针: 指向当前commit
- `^`: 向上移动一个提交记录, `HEAD^`表示上一个提交记录
- `~<num>`向上移动num个提交记录, `HEAD~3`表示上三个提交记录

```shell
git checkout HEAD^
git checkout main^^  # 有main分支向上移动两个节点
git checkout HEAD~3  # 从HEAD开始向上移动3个节点
git branch -f main HEAD^  # 强制修改main分支为HEAD的父节点
```
## 指定范围commit

- 适合用来回答: 在这个分支上有哪些改变我还没有应用到我的主分支上
- Double Dot: `git log <commit1>..<commit2>`: 显示commit2和commit1分开后的所有commit记录
- Triple Dot: `git log <commit1>...<commit2>`: 显示commit1和commit2之间的提交记录