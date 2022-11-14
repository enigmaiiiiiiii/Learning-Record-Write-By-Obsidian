# 账号管理

[创建用户](linux_Create_User.md)

[切换用户](Linux_Switch_User.md)

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

- `usermod [-c/d/e/g/G/l/s/u/L/U] username`

## 删除用户

- `userdel [-r] username`
  - `-r`: 表示连同home中的用户文件加一起删除

## logout

```bash
[username@localhost ~]$ logout
```

## login

```bash
```
