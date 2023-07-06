# Linux - File Id

- UID: User ID
- GID: Group ID
- SUID: can be understood as an attribute, can only be used for binary files, binary files have the owner's permissions during execution
- EUID: the ID when executing the program, if the file has the SetUID attribute, the EUID may not be equal to the UID
- Setuid是指对文件执行[Chmod](linux-command-chmod.md) +s命令
- understand the concept of EUID can refer to [the process of changing password](linux-how-to-change-password.md)
- every file has at least two IDs, user `ID-UID` and group `ID-GID`

file permission looks like:

- `-rwxr-xr-x`
- `-rwsr-sr-x`

