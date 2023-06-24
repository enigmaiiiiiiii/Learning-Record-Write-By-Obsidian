# Git Glossary

* [index](#index)
* [Git Mechanism](#git-mechanism)
* [Working Directory](#working-directory)
* [Staging Area](#staging-area)
* [Git Directory](#git-directory)
* [Stage file process](#stage-file-process)
* [Untracked files](#untracked-files)
* [remote repository](#remote-repository)
* [Status](#status)
* [working tree](#working-tree)
* [Work Flow](#work-flow)
* [Checksum](#checksum)
* [HEAD](#head)

## index

- save information about what will go into your next commit, like modificatoin, delete, new file

## Git Mechanism

- save file snapshot, not diff
- generally only add data, so almost no **irreversible operation**

## Working Directory

- 对项目的某个版本独立提取出来的内容
- 从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

## Staging Area

- 一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中
- 按照 Git 的术语叫做“索引”，不过一般说法还是叫“暂存区”

## Git Directory

`.git directory(Repository)`

- Git 用来保存项目的元数据和对象数据库的地方
- 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据

## Stage file process

- calculate checksum
- 保存版本信息到git repository
- 将校验和添加的暂存区

## Untracked files

- Git之前的提交中没有的文件

## remote repository

[remote](git-remote.md)

## Status

- committed: data has been safely stored in the local database
- modified: modified file, not saved to the data yet
- staged: Mark the current version of a modified file so that it is included in the snapshot of the next submission

## working tree

- 工作树是项目的一个版本的单个检出。这些文件从Git目录中的压缩数据库中取出，放在磁盘上供您使用或修改。

## Work Flow

1. Work on file

## Checksum

- 是由40个16进制字符(`[0-9a-f]{40}`)组成的字符串
- 所有内容在存储之前都要进行校验和

## HEAD

- A pointer point to last commit of **current** branch

## Upstream

- The default [remote repository](git-remote.md) of current branch
