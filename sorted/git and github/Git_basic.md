# git基础

## git add

- 跟踪新文件
- 

## 
## 相对引用

- `^`向上移动一个提交记录
- `~<num>`向上移动num个提交记录

```shell
git checkout HEAD^
git checkout main^^  # 有main分支向上移动两个节点
git checkout HEAD~3  # 从HEAD开始向上移动3个节点
git branch -f main HEAD^  # 强制修改main分支为HEAD的父节点
```