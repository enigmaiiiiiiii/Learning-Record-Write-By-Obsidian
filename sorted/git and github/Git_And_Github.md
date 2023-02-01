# Git与 Github

## I

[git术语](Git_Concept.md)

[Git Installation](Git_Installation.md)

[Git Configuration](Git_Configuration.md)

[Commit](Git_Commit.md)

[Branch](Git_Branch.md)

[git远程](Git_Remote.md)

[Git Command List](Git_Command_List.md)

## Github

[GitHub Issues](GitHub_Issues.md)

[Pull Request](GitHub_Pull_Request.md)

[Pull Request Workflow](Github_Pull_Request_Workflow.md)

## III

[Practical Use](Git_Practical_Command.md)

[.gitignore文件](Git_Ignore.md)

[Github搜索技巧](Github_Search_Skills.md)

[Detached head](Git_Detached_Head.md)

## IV

[Git Internals](Git_Internals.md)

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
