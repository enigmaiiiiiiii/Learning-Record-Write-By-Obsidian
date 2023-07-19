# Git - Tag


## List Tag

```sh
git tag
```

## Two Types of Tag

Lightweight Tag

- just a pointer to a commit
- create by `git tag <tag-name>`

Annotated Tag

- stored as full objects in the Git database, contains
  - tag name
  - date
  - email
  - having tag message
- create by `git tag -a <tag-name> -m <tag-message>`

## Tag A Historical Commit

```sh
git tag -a <tag-name> -m <tag-message> <commit>
```

## Sharing Tag

- just like sharing branch

```sh
git push origin <tag-name>
```

