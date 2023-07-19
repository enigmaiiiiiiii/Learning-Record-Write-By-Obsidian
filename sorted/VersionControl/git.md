# Git And Github

## I

[Git Glossary](git-glossary.md)

[Git Installation](git-installation.md)

[Git Configuration](git-configuration.md)

[Add](git-add.md)

[Commit](git-commit.md)

[.gitignore](git-ignore.md)

[Branch](git-branch.md)

[Remote](git-remote.md)

[Git Pull](git-pull.md)

[Git Push](git-push.md)

[Git Fetch](git-fetch.md)

[Git Rebase](git-rebase.md)

[Git Status](git-status.md)

[Git Revert]()

[Git Tag](git-tag.md)

[Git Command List](git-command-list.md)

## Github

[Github Issues](github-issues.md)

[Github Actions](github-actions.md)

[Pull Request](github-pull-request.md)

## Blog

[Practical Command](git-practical-command.md)

[Git Best Practice For Collaboration](git-best-practice-for-collaboration.md)

[Github Search Skills](github-search-skills.md)

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
