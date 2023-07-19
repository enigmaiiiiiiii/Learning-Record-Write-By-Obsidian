# Git - Refspec

## What is refspec

this add remote repository for local repository

```sh
git remote add origin https://github.com/schacon/simplegit-progit
```

this command will add following to `.git/config` file

```config
remote "origin"]
	url = https://github.com/schacon/simplegit-progit
	fetch = +refs/heads/*:refs/remotes/origin/*
```

the **refspec** is `+refs/heads/*:refs/remotes/origin/*`

## Features

- refspec will automatically created when `git remote add` is executed

## What Refspec do

- establish mapping between **remote branch** and **local branch**

## Refspec Format

`+<src>:<dst>`

- +: is optional
- `<src>`: represent local branch 
  - format: `refs/heads/<branch_name>`
- `<dst>`: represent remote branch
  - format: `refs/remotes/<remote_name>/<branch_name>`

```sh
git log origin/master
git log remotes/origin/master
git log refs/remotes/origin/master 
```

they are equivalent

