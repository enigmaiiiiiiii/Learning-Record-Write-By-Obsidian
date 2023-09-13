# Practical Command of Git

* [print merges commit log](#print-merges-commit-log)
* [Check Commit Log](#check-commit-log)
* [Undo commit](#undo-commit)
* [remove file from stage](#remove-file-from-stage)
* [discard all local changes](#discard-all-local-changes)
* [check staged files](#check-staged-files)
* [Set HEAD to specified status](#set-head-to-specified-status)
* [changes forgotten to add to the last commit](#changes-forgotten-to-add-to-the-last-commit)
* [temporarily save current modification](#temporarily-save-current-modification)
* [Check all branches](#check-all-branches)
* [Resovle Conflict](#resovle-conflict)
* [A way to make the lastest commit as the initial commit](#a-way-to-make-the-lastest-commit-as-the-initial-commit)

## Output Git Log In Stdout

```sh
git --no-pager log
```

> `git log | cat` also works, but not colorful

## Track A file Changes History



## print merges commit log

```bash
git log --merges
```

## Check Commit Log

```bash
git log
```

```shell
commit d590a26b3b988f24842d433d4b64708ff545d399 (HEAD -> main)
Author: enigmaiiiiiiii <62017693+enigmaiiiiiiii@users.noreply.github.com>
Date:   Mon May 30 15:24:20 2022 +0800

    mainwindow.cpp : 608

commit fa552d867bb6615f049720adaf336faed2727a16 (origin/main)
Author: enigmaiiiiiiii <62017693+enigmaiiiiiiii@users.noreply.github.com>
Date:   Mon May 30 09:12:14 2022 +0800
```

commit id: d590a26b3b988f24842d433d4b64708ff545d399

## Undo commit

```bash
git reset [--soft | --mixed [-N] | --hard |--merge | --keep] [-q] <commitid>
```

| option  | undo commit | undo `git add` | discard modification | is default options |
| ------- | ----------- | -------------- | -------------------- | ------------------ |
| --soft  | yes         | no             | no                   | no                 |
| --mixed | yes         | yes            | no                   | yes                |
| --hard  | yes         | yes            | yes                  | no                 |

## remove file from stage

```sh
git rm --cached [<file>...]
git rm --cached -r [<dir>...] # recursive remove
```

remove files that new add to `.gitignore` from stage that already add by previous commit 

1. remove a file from stage
2. then git add back again

```sh
git rm --cached -r . # remove all files from stage 
git add . # add all files to stage
```

## discard all local changes

```sh
git reset --hard # discard all local changes and untracked files
git clean -fxd # delete untracked files
```

## check staged files

```bash
git ls-files
```

## Set HEAD to specified status

```bash
git reset --hard <commitid>
```

## changes forgotten to add to the last commit

- `git commit --amend` after some changes have been made

for example forget to add a file to the last commit

```bash
git commit -m "commit with partial files" git add <forgotten_file>
git commit --amend
```

## temporarily save current modification

- And go check other commits without committing current modification

temporarily store modification

```sh
git stash
```

save modification and new files temporarily

```sh
git stash --include-untracked
```

restore modification and delete stash record

```sh
git stash pop
```

## check all branches


```bash
git branch -a
```

> repository download use `git clone` will only show current branches

## Resovle Conflict

## A way to make the lastest commit as the initial commit

```sh
git checkout --orphan new_main
git add -A
git commit -m "initial commit message what you want"
git branch -D main
git branch -m main
git push -f origin main
```
