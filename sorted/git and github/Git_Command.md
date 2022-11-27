# git命令

## git merge

- `git merge <commit>`: 将指定的commit的更改(包括历史更改)合并到当前分支
- `git merge -s <strategy>`: 通过-s选项指定合并策略, strategy取值:
  - ort: 默认策略, ort是合并算法的缩写
  - ours: 冲突时，保留当前分支的更改
  - ~~~theirs: 冲突时，保留合并分支的更改~~~

## git revert

- `git revert <commit>`: 撤销指定的commit所做的修改, 生成一个新的commit

## git reset

[reset](Git_Command_reset.md)
## git clean

- 删除未被追踪的文件

## git checkout

- `git checkout <branch>`
- `git checkout -b <new-branch>`: 同`git branch <new-branch>`
- `git checkout -detach [<branch>]`: 开始在commit or branch之上工作,
  - 保留工作树中的本地更改
  - 当前工作树的状态: 提交记录(commit record) + 本地修改(local modifications)
- `git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-fil-nul]`: overwrite files match the pathspec, 通过指定文件路径覆盖指定的文件
  - `<tree-ish>`: most often a commit
  - 用`<tree-ish>`的`<file>`文件覆盖工作树的`<file>`文件
- `git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>...]`
  - 通过[交互式模式](Git_Interactively_Mode.md)完成文件覆盖操作

### option

- `-f`: 切换分支时，即使index或working tree 与HEAD不同, 即使其中有untracked file, 用来丢弃本地更改和untracked file or directory的方式

## git cherry-pick

- `git cherry-pick <commit>`: 应用指定的commit的修改到[HEAD](Git_Concept.md#HEAD)

## git add

## git rebase


***

## 1. Start

<table>
    <tr>
        <td>命令</td>
        <td>例</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>clone</td>
        <td>git clone git@github.com:enigmaiiiiiiii/Learning-record.git</td>
        <td>copyies remote repository into your current directory.</td>
    </tr>
    <tr>
        <td>init</td>
        <td>git init</td>
        <td>Creates a new empty repo in your current directory.</td>
    </tr>
    <tr>
        <td>add</td>
        <td>git add *file1* *file2*</td>
        <td>Adds *file1* and *file2* to the staging area.</td>
    </tr>
    <tr>
        <td>status</td>
        <td>git status</td>
        <td>Lists changes in wirking directory,and staged files.</td>
    </tr>
    <tr>
        <td rowspan=2>commit</td>
        <td>git commit</td>
        <td>Records everything in the staging area to your reposity.The default text editor will prompt you for a commit message.</td>
    </tr>
    <tr>
        <td>git commit -m "commit message"</td>
        <td>commit with message.</td>
    </tr>
    <tr>
        <td>log</td>
        <td>git log</td>
        <td>print git commit history.</td>
    </tr>
    <tr>
        <td>reset</td>
        <td>git reset</td>
        <td>removes all files from staging area.(Opposite of *git add*)</td>
    </tr>
</table>

## 2. Remote

|command|||
| -- | -- | -- |
| fetch(获取) | git fetch | Gets status of 'origin'.git fetch does not change your working directory or local repositoty (see git pull). |
| pull | git pull | Incorporates(包含了) changes from 'origin' into local repo. |
|| git pull *repo* *branch* | Incorporates changes from local repo into *repo* *branch* |
| push | git push | Incorporates changes from local repo into 'orgin'
|| git push *repo* *branch* | Incorporates changes from local repo into *repo* *branch* |

## 3. repo

||||
| -- | -- | -- |

## 4. Branches

<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan=2>branch</td>
        <td>git branch</td>
        <td>List branches.</td>
    </tr>
    <tr>
        <td>git branch *branch-name*</td>
        <td>Creat new branch *branch-name*</td>
    </tr>
    <tr>
        <td rowspan=2>checkout</td>
        <td>git checkout *branch*</td>
        <td>Switch to editing branch *branch-name*</td>
    </tr>
    <tr>
        <td>git checkout *commit*</td>
        <td>Switch to editing history commit</td>
    </tr>
    <tr>
        <td>merge</td>
        <td>git merge *branch-name*</td>
        <td>Merge *branch-name* into current branch.</td>
    </tr>
</table>

***

## 5. 文件操作

<table>
    <tr>
        <td rowspan=2>rm</td>
        <td>git rm [file]</td>
        <td>从目录和暂存区中删除文件</td>
    </tr>
    <tr>
        <td>git rm -r --cached [file]</td>
        <td>--cached从暂存区中删除文件(移出git)<br> -r递归删除</td>
    </tr>
</table>

