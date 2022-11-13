# 创建用户

## useradd

- `useradd [-u UID] [-g initial_group] [-G other_group] -[M/m] [-c 说明栏] [-d home] [- s shell] username`
  - `-u`: 指定UID
  - `-g`: 指定初始群组
  - `-G`: 其他群组
  - `-M`: 强制不建立用户home目录
  - `-m`: 强制简历用户home目录
  - `-c`: 
  - `-d`: 指定某个目录作为用户存放文件目录
  - `-r`: 
  - `-s`:指定一个shell， 默认`/bin/bash`
  
## passwd

- 修改用户密码
- `passwd [-k/l/u/f/d/S] [username]`
  - `-d` 删除密码
  - `-f` 强制用户下次登陆使必须修改口令
  - `-w` 口令要到期前警告天数
  - `-k`
  - `-l`
  - `-S`
  - `-u`
  - `-x`
  - `-g`

[[passwd修改密码的过程]]

## 一般流程


```shell
useradd username
# 此时账户处于封锁状态
passwd username
```
