# git基础

## 安装Git后要做的第一件事

- 设置user.name和user.email, 作为每次[commit]git都会使用的信息

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

- 通过`--global`选项， 为git一次配置
- 不加`--global`选项, 为特定仓库指定name和email

## 配置Git

[配置Git](Git_Configuration.md)

## Git Commit

- commit时保存[暂存区]的[文件快照]的指针


## git add

- 跟踪新文件

## 相对引用

- `^`向上移动一个提交记录
- `~<num>`向上移动num个提交记录

```shell
git checkout HEAD^
git checkout main^^  # 有main分支向上移动两个节点
git checkout HEAD~3  # 从HEAD开始向上移动3个节点
git branch -f main HEAD^  # 强制修改main分支为HEAD的父节点
```

## 创建Branch

