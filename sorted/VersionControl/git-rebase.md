# Git - Rebase


## Removed A Range Of Commit

from

```sh
E---F---G---H---I---J  branchA
```

to

```sh
E---H'---I'---J'  branchA
```

```sh
git rebase --onto branchA~5 branchA~3 branchA
```

## Rebase A Branch

assume folllowing history

```sh
      A---B---C  topic
     /
D---E---F---G  master
```

Assume `topic` is the current branch

```sh
git rebase master
git rebase master topic
```

either above command will result in

```sh
              A'--B'--C'  topic
             /
D---E---F---G  master
```

## Interactive Mode

An editor will be fired up with all commit in your current branch

the file looks like

```sh
pick 1d0d4b3 commit message
pick 2e3d4b3 commit message
pick 3e3d4b3 commit message

# rebase b1d3c4d..2e3d4b3 onto b1d3c4d (5 command(s))
# ...
```

modify file like this will **squash the first two commit into the latest one commit**

```sh
squash 1d0d4b3 commit message
squash 2e3d4b3 commit message
pick 3e3d4b3 commit message
```

modify this file like this will **only keep the last commit**

```sh
drop 1d0d4b3 commit message
drop 2e3d4b3 commit message
pick 3e3d4b3 commit message
```

## resolve conflict

after resolve conflict in file, use `git add <file>` to add the file to stage area, continue with

```sh
git rebase --continue
```

abort rebase

```sh
git rebase --abort
```
