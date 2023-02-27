# Git与 Github

## I

[git术语](git-concept.md)

[Git Installation](git-installation.md)

[Git Configuration](git-configuration.md)

[Commit](git-commit.md)

[Branch](git-branch.md)

[git远程](git-remote.md)

[Git Command List](git-command-list.md)

## Github

[GitHub Issues](github-issues.md)

[Pull Request](github-pull-request.md)

[Pull Request Workflow](github-pull-request-workflow.md)

## III

[Practical Use](git-practical-command.md)

[.gitignore文件](git-ignore.md)

[Github搜索技巧](github-search-skills.md)

[Detached head](git-detached-head.md)

## IV

[Git Internals](git-internals.md)

## Problems

1. error when git clone

key error infomation:

- `error: invalid path 'csr/public/pokemon/type:-null.jpg'`

condition

- happenned in windows

solution:

```sh
git config --global core.ignorecase false
```