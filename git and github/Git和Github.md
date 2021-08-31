![git命令](src/Git%20Diagram.svg)

# git and github

## 1. Start

||||
| -- | -- | -- |
| clone | git clone git@github.com:enigmaiiiiiiii/Learning-record.git | copyies remote repository into your current directory. |
| init | git init | Creates a new empty repo in your current directory. |
| add | git add *file1* *file2* | Adds *file1* and *file2* to the staging area. |
| status | git status | Lists changes in wirking directory,and staged files. |
| commit | git commit | Records everything in the staging area to your reposity.The default text editor will prompt you for a commit message. |
||git commit -m "commit message" | commit with message. |
| log | git log | print git commit history. |
| reset | git reset | removes all files from staging area.(Opposite of *git add*) |

## 2. Start

||||
| -- | -- | -- |
| clone | git clone git@github.com:enigmaiiiiiiii/Learning-record.git | copyies remote repository into your current directory. |
| init | git init | Creates a new empty repo in your current directory. |
| add | git add *file1* *file2* | Adds *file1* and *file2* to the staging area. |
| status | git status | Lists changes in wirking directory,and staged files. |
| commit | git commit | Records everything in the staging area to your reposity.The default text editor will prompt you for a commit message. |
||git commit -m "commit message" | commit with message. |
| log | git log | print git commit history. |
| reset | git reset | removes all files from staging area.(Opposite of *git add*) |

## 3. Remote

||||
| -- | -- | -- |
| fetch(获取) | git fetch | Gets status of 'origin'.git fetch does not change your working directory or local repositoty (see git pull). |
| pull | git pull | Incorporates(包含了) changes from 'origin' into local repo. |
|| git pull *repo* *branch* | Incorporates changes from local repo into *repo* *branch* |
| push | git push | Incorporates changes from local repo into 'orgin'
|| git push *repo* *branch* | Incorporates changes from local repo into *repo* *branch* |

## 4. repo

||||
| -- | -- | -- |

## 5. Branches

||||
| -- | -- | -- |
| branch | git branch | List branches. |
||git branch *branch-name* | Creat new branch *branch-name* |
| checkout | git checkout *branch-name* | Switch to editing branch *branch-name* |
| merge | git merge *branch-name* | Merge *branch-name* into current branch. |

***

## 6. 操作实例