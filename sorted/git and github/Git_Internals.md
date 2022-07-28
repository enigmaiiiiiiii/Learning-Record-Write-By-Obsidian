# Internals

## refspec

创建了本地仓库并添加远程: 

```shell
git remote add origin https://github.com/schacon/simplegit-progit
```
.git/config文件有远程仓库的地址和用来[fetching]的refspec

```
[remote "origin"]
        url = https://github.com/schacon/simplegit-progit
        fetch = +refs/heads/*:refs/remotes/origin/*
```

- refspec的格式
  - 可选的`+`
  - `<src>:<dst>`
    - src表示远程相关
    - dst表示本地引用
