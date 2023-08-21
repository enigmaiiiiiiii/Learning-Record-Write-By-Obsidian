# Git - Resolve Conflict

## When Conflict Happens

- both branches make changes on same area of a file

## What Conflict Looks Like

For example a conflict Happens on such situation

- merge branchB to branchA
- file `text.md` is modified on both branchA and branchB

```
<<<<<<< branchA:text.md
Conflict resolution is hard;
let's go shopping.
=======
Git makes conflict resolution easy
>>>>>>> branchB:text.md
```

- **current content** and **different content** are separated by `=======` 

## Check Conflict

- git diff
- git show

## Resolve Conflict

- git mergetool

