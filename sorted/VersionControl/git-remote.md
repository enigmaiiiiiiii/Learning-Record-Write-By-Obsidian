# Git - Remote

* [set remote repository url](#set-remote-repository-url)
* [push to remote repository](#push-to-remote-repository)
* [pull from remote repository](#pull-from-remote-repository)
* [delete remote branch](#delete-remote-branch)
* [Contribute To Remote Branch](#contribute-to-remote-branch)
* [connection between local Branches](#connection-between-local-branches)
* [Access Control](#access-control)
* [Contribute to Project](#contribute-to-project)

## set remote repository url

```bash
git remote add origin <REMOTE_URL>
```

- `origin`: remote repository **alias**
- `REMOTE_URL`: remote repository URL

this command will add following to `.git/config` file

```
[remote "origin"]
    url = <REMOTE_URL>
    fetch = +refs/heads/*:refs/remotes/origin/*
```

- the value of `fetch` is a [refspec](git-refspec.md)

## push to remote repository

`git push -u origin master`: push master branch to remote repository

- `-u`: set default remote repository and branch
- `origin`: remote repository **alias**
- `master`: local branch that want to push

## pull from remote repository

`git pull origin master`: pull remote repository's master branch to local

- master: remote branch
- origin: **remote repository alias**, not local branch

## delete remote branch

`git push origin --delete <branch_name>`: delete remote branch

> `branch_name` must not be default branch

## Contribute To Remote Branch

option1:

- `git checkout -b <local_branch_name> origin/<remote_branch_name>`

option2:

- `git switch -c <local_branch_name>`

## connection between local Branches

Tracking Branch

- **definition**: local branch automatically created direct relationship to the remote branch
- when clone a repository, it generally automatically creates a `master` branch that tracks `origin/master`
- set a local branch to track a remote branch
  - `git checkout -b <local_branch_name> origin/<remote_branch_name>`
    - this can create a local branch name **different** with remote branch name 
  - `git checkout --track origin/<remote_branch_name>` short hand for above command, create a **same name** local branch 
  - `git checkout branch_name` if `branch_name` matches a remote branch name, it will automatically set up tracking relationship 

## Access Control

[Credential Manager](git-credential-manager.md)

[GitHub Personal Access Token)](github-personal-access-token.md)

## Contribute to Project

[personal team]

[Public Project](git-forked-public-project.md)

[Create Pull Request](github-create-pull-request.md)
