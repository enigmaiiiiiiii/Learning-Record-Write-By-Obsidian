# Linux - Process of Changing Password

[File ID](linux-file-id.md)

- learn changing password mechanism is a good way to learn [file permission](linux-file-permission.md)
- file permission related to changing password

| File              | Permissions | File Owner  |
| ----------------- | ----------- | ----------- |
| /etc/passwd       | -rw-r--r--  | root        |
| /etc/shadow       | -rw-r-----  | root        |
| /usr/bin/passwd   | -rwsr-xr-x  | root        |

- We can see only root user has read and write permission
- but other users can still change password, the reason is the permission of `/usr/bin/passwd` executable file
- file `/usr/bin/passwd` has a special permission `s`
  - this `s` is [Set UID]
  - when user execute this file, it can temporarily get root permission
- use command `chmod u-s /usr/bin/passwd` to remove s permission, then normal user can not change password
