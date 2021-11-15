# 账号管理

[[linux创建用户]] 

 [[su]] 切换用户

## 查看登录的用户

- 用来查询远程登录的用户
- `who [option] [user]`
  - `-a`
  - `-b`
  - `-d`
  - `-H` 
  - `-l` 
  - `-p` 
  
## 修改用户

- `usermod [-c/d/e/g/G/l/s/u/L/U] username

## 删除用户

- `userdel [-r] username` 
  - `-r`: 表示连同home中的用户文件加一起删除 