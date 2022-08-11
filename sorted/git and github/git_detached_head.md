# detached head

> 当同一分支，先后两次提交，当使用git checkout 查看历史提交时，在同一分支历史提交版本上改动并尝试commit时，会提示detached head警告

- HEAD通常指一个命名branch, branch指向一个特定commit
- 当创建一个commit时, branch is updated to refer to new commit, HEAD指向(refer to)branch,也就指向(refer to)了新的commit
- 当checkout一个 *commit* or *not named branch* 时, 此时成为**detached head**状态
- detached head: HEAD引用一个特定的commit, 而不是引用一个已命名的branch