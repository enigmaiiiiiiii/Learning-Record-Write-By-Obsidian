# Docker - Build Image From Github

* [Build last commit of default branch](#build-last-commit-of-default-branch)
* [Build with specific branch, tag, or subdirectory](#build-with-specific-branch,-tag,-or-subdirectory)

## Build last commit of default branch

use last commit of default branch as build context

```sh
docker build https://github.com/user/myrepo.git
```

## Build with specific branch, tag, or subdirectory

| suffix            | Commit Used                 | Build Context |
| ----------------- | --------------------------- | ------------- |
| myrepo.git        | refs/heads/<default_branch> | /             |
| myrepo.git#tag    | refs/tags/<tag>             | /             |
| myrepo.git#branch | refs/heads/<branch>         | /             |
| myrepo.git#:path  | refs/heads/<default_branch> | /<path>       |
