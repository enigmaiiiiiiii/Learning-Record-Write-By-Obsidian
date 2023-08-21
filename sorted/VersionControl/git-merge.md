# Git - Merge

* [Fast Forward Merge](#fast-forward-merge)
* [Practical Merge](#practical-merge)
* [resolve conflict](#resolve-conflict)
* [Undo merge](#undo-merge)

## Fast Forward Merge

when fast forward merge

- current branch is ancestor of the target commit
- most common case is git pull

demonstrate with following graph

```
A---B---C main
        \
        D---E experiment
```

- when current branch is `main`, use `git merge experiment` will cause fast forward merge
- the graph looks like

```
A---B---C---D---E main, experiment
```

## Practical Merge

1. merge to current branch

```sh
git merge <commit_num>
```

2. merge with strategy

```sh
git merge -s <strategy>
```

- `strategy` is one of the following
  - `ort`: default strategy, ort is abbreviation of `Ostensibly Recursive's Twin`
  - `ours`: save the changes of current branch when conflict
  - `theirs`: when conflict, keep the changes of merge branch

## resolve conflict

[resolve conflict](git-resolve-conflict.md)

## Undo merge

```sh
git reset --hard <commit_id>
```

- `commit_id` is the commit before merge

