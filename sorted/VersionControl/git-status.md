# git - status

* [basic file status](#basic-file-status)
* [check file status in specific directory](#check-file-status-in-specific-directory)
* [check which file ignored by .gitignore](#check-which-file-ignored-by-.gitignore)
* [check all staged files](#check-all-staged-files)
* [options](#options)

## basic file status

changes to be committed:

- file that has been added to the [staging area](git-glossary.md#staging-area)

Changes not staged for commit:

- file that has been modified but not added to the [staging area](git-glossary.md#staging-area)

Untracked files:

- file that is not [tracked]() by git

## check file status in specific directory

```sh
git status <directory>
```

## check which file ignored by .gitignore

```sh
git status --ignored
```

## check all staged files

```sh
git status --staged
```

## options

`-s, --short`

- show status concisely

