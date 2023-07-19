# Git Best Practice For Collaboration

## Work On A Branch

- A feature A branch

## Commit Small And Frequent

- Small
- Frequent

## Clean Up Branch Commit History

option 1: [reset]() to master branch, then commit all changes

```sh
git reset master
git add .
git commit -m "all changes in one commit"
```

## When Master Is Updated

first option is merge master into my branch

```sh
git merge master
```

i can also use [rebase](git-rebase.md)

```sh
git fetch
git rebase master
```

## Handle Merge 

- require interactive operation

