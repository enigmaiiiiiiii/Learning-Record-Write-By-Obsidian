# Linux - Account Management

* [check login user](#check-login-user)
* [Query list](#query-list)
* [Create User](#create-user)
* [Switch User](#switch-user)
* [modify user](#modify-user)
* [delete user](#delete-user)
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

## Query list

```sh
cat /etc/passwd
```

format of this file

- `username:password:UID:GID:comment:home directory:shell`

## Create User

[Create User](linux-create-user.md)

## Set User's Password

```sh
passwd [username]
```

output looks like:

```
Changing password for user foo.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
```

## Switch User

`su [option] [username]`

## modify user

Syntax

`usermod [options] username`

options

- `-a`: add user to group
- `-b`
- `-c`: change comment field
- `-d`: change home directory
- `-e`: change expiration date

add exist user to group

```bash
usermod -a -G groupname username
```

## delete user

Syntax

`userdel [options] username`

options

- `-r`: Files in user's home directory will be removed

## logout

```bash
[username@localhost ~]$ logout
```

## login

## Create Group

Syntax

`groupadd [options] group`


options

- `-f`: force
- `-g`: group ID
- `-r`: create a system group
  - GID is between `SYS_GID_MIN` ~ `SYS_GID_MAX`
  - instead of `GID_MIN` ~ `GID_MAX`

create new group, named `temp`

```sh
groupadd temp
```

## Query Existing Group

use `cat /etc/group` to query existing group

- file content format: `group_name:password:GID:user_list`

`/etc/gshadow`: Group account information

`/etc/login.defs`: Login defaults

## Query User's Group

Syntax

`groups [OPTION] ... [USERNAME] ...`

query user `nginx`'s group

```sh
groups nginx
```

output looks like:

```sh
nginx: group1 group2 group3
```