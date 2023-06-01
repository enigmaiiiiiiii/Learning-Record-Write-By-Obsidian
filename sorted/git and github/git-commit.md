# commit


## What Happen When Git Commit

- commit save a pointer to the [snapshot] of the [staged](git-glossary.md#staging-area) content

假设有一个含有三个文件的目录, 将所有文件加入stage area, 并commit, 当使用git commit时

- Git检查(checksums)每一个子目录并保存为一个tree Object到Git repository;
- 创建一个新的commit Object, 和一个指向root project tree的指针;
- 此时，git repository中包含5个对象:
  - 三个blob(文件内容)
  - 一个树结构: 包含目录内的文件，并说明那些文件是blob
  - 一个commit: 包含commit元数据和指向root tree的指针

继续commit:

- commit包含一个指向前一个commit的指针

## use relative reference to represent a commit

Combine relative reference symbol with branch name can represent a commit

- relative reference symbol: `^` and `~`
  - `^`: parent commit
  - `~3`: the 3th generation ancestor commit

```shell
git checkout HEAD^   # check parent commit
git checkout main^^  # check 2th generation ancestor commit
git checkout HEAD~3  # check 3th generation ancestor commit
git branch -f main HEAD^  # force move main branch to parent commit
```

## check commit range

- properly to answer question: what changes have I not yet applied to my master branch from this branch?
- Double Dot: `git log <commit1>..<commit2>`: 显示commit2和commit1分开后的所有commit2分支上的记录, **不包括commit2**
- Triple Dot: `git log <commit1>...<commit2>`: 显示commit1和commit2之间的提交记录