# Git - Remote

* [set remote repository url](#set-remote-repository-url)
* [push to remote repository](#push-to-remote-repository)
* [pull from remote repository](#pull-from-remote-repository)
* [Access Control](#access-control)
* [Contribute to Project](#contribute-to-project)

## set remote repository url

```bash
git remote add origin <REMOTE_URL>
```

- `origin`: remote repository **alias**
- `REMOTE_URL`: remote repository URL

## push to remote repository

`git push -u origin master`: push master branch to remote repository

- `-u`: set default remote repository and branch
- `master`: local branch that want to push
- `origin`: remote repository **alias**

## pull from remote repository

`git pull origin master`: pull remote repository's master branch to local

- master: remote branch
- origin: **remote repository alias**, not local branch

## delete remote branch

`git push origin --delete <branch_name>`: delete remote branch

> `branch_name` must not be default branch

## Access Control

[Credential Manager](git-credential-manager.md)

[GitHub Personal Access Token)](github-personal-access-token.md)

## Contribute to Project

[personal team]

[Public Project](git-forked-public-project.md)

[Create Pull Request](github-create-pull-request.md)
