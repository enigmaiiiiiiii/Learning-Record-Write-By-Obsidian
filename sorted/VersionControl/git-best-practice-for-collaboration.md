# Git Best Practice For Collaboration

* [Work On A Branch](#work-on-a-branch)
* [Commit Small And Frequent](#commit-small-and-frequent)
* [Clean Up Branch Commit History](#clean-up-branch-commit-history)
* [When Master Is Updated](#when-master-is-updated)
* [Handle Merge ](#handle-merge-)

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

- Apply the changes of master to your branch
- Before apply changes ensure your branch is clean - commit any changes your made

option 1: merge master into my branch

```sh
git merge master
```

option 2: [rebase](git-rebase.md)

```sh
git fetch
git rebase master
```

option 3: [cherry-pick]()

## Merge VS Rebase

[Merge VS Rebase When Sync With Master](git-merge-vs-rebase.md)


## Handle Merge 

- require interactive operation

