# Git - git pull

## What git pull do

- `git pull` = [`git fetch`](git-fetch.md) + `git merge`
- will modify your working diretory

```
      A---B---C master on origin 
     /
D---E---F---G master
    ^
    origin/master
```

```
      A---B---C origin/master
     /         \
D---E---F---G---H master
```

## Syntax

`git pull [options] [repository [refspec]]`

- `repository`: name of remote repository
- [`refspec`](git-refspec.md)

## Options

- `--ff-only`: only allow fast-forward


