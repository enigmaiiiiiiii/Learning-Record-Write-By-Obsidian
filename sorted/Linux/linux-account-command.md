# Linux - Account Management

* [check login user](#check-login-user)
* [Create User](#create-user)
* [Switch User](#switch-user)
* [usermod](#usermod)
* [userdel](#userdel)
* [logout](#logout)
* [login](#login)
* [groupadd](#groupadd)
* [groups](#groups)

## check login user

- use to check remote login user
- `who [option] [user]`
  - `-a`
  - `-b`
  - `-d`
  - `-H`
  - `-l`
  - `-p`

## Create User

[Create User](linux-create-user.md)

## Switch User

`su [option] [username]`

## usermod

- modify user

syntax: `usermod [-c/d/e/g/G/l/s/u/L/U] username`

options

- `-a`: add user to group
- `-b`
- `-c`: change comment field
- `-d`: change home directory
- `-e`: change expiration date

add user to group

```bash
usermod -a -G groupname username
```

## userdel

- delete user

synatx: `userdel [-r] username`

options

- `-r`: 表示连同home中的用户文件加一起删除

## logout

```bash
[username@localhost ~]$ logout
```

## login

## groupadd

- create a new [group](linux-group.md)

`groupadd [options] group`

新建分组, 命名为temp

```bash
groupadd temp
```

options

- `-f`: force
- `-g`: group ID
- `-r`: create a system group
  - GID is between `SYS_GID_MIN` ~ `SYS_GID_MAX`
  - instead of `GID_MIN` ~ `GID_MAX`

group相关的文件

`/etc/group`: Group account information

- 文件内容格式: `group_name:password:GID:user_list`

`/etc/gshadow`: Group account information
`/etc/login.defs`: Login defaults

## groups

`groups [OPTION] ... [USERNAME] ...`

- print the groups a user is in
- 查看用户所属的组

output looks like:

```
username: group1 group2 group3
```