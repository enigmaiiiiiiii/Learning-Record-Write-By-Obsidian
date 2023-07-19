# Git - Refs

## Directory refs

refs/heads

- Represent where HEAD is pointing
- directory structure looks like

```
refs/heads
├── master
└── test
```

refs/remotes

- directory structure looks like

```
refs/remotes
└── origin
    ├── HEAD
    ├── master
    └── test
```

- `origin` is the name of remote repository
- this command `git remote add origin <REMOTE_URL>` defines `origin` as remote repository name

refs/tags

## HEAD

take a look at `.git/HEAD` file

```sh
.git/HEAD
```

- most cases, the content of `.git/HEAD` is a reference to a branch, like `ref: refs/heads/master`
  - `master` is current branch name 
- rare cases, the content of `.git/HEAD` is a commit hash, like `1df0fe25775655a98128d97f8ad4b68409f1fe87`
  - this happens when you checkout
    - commit hash
    - tag
    - remote branch
