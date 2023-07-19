# Git Glossary

* [index](#index)
* [Git Mechanism](#git-mechanism)
* [Working Directory](#working-directory)
* [Staging Area](#staging-area)
* [Git Directory](#git-directory)
* [Stage file process](#stage-file-process)
* [Untracked files](#untracked-files)
* [remote repository](#remote-repository)
* [Status](#status)
* [working tree](#working-tree)
* [Work Flow](#work-flow)
* [Checksum](#checksum)
* [HEAD](#head)
* [Upstream](#upstream)
* [fast-forward](#fast-forward)
* [detach head](#detach-head)
* [tag](#tag)

## index

- save information about what will go into your next commit, like modificatoin, delete, new file

## Git Mechanism

- save file snapshot, not diff
- generally only add data, so almost no **irreversible operation**

## Working Directory

- files that you extract from the compressed database in the Git directory and place on disk for you to use or modify

## Staging Area

- a file that stores information about what **will go into your next commit**

## Git Directory

`.git directory(Repository)`

- Where Git stores the metadata and object database for your project
- this is the most important part of Git, and when you clone a repository from another computer, you copy the data here

## Stage file process

- calculate checksum
- ...

## Untracked files

- files that does not exist in previous commit

## remote repository

[remote](git-remote.md)

## Status

- committed: data has been safely stored in the local database
- modified: modified file, not saved to the data yet
- staged: Mark the current version of a modified file so that it is included in the snapshot of the next submission

## working tree

- a single version of project checkout

## Work Flow

1. Work on file

## Checksum

[What is checksum](checksum.md)

- Consist of 40 hexadecimal characters(`[0-9a-f]{40}`)
- All Content must be checksumed before stored

## HEAD

- A pointer point to last commit of **current** branch

## Upstream

- The default [remote repository](git-remote.md) of current branch

## fast-forward

- happens when merge a branch
- no new merge commit

## detach head

## tag

## refspec

## repository

## group

