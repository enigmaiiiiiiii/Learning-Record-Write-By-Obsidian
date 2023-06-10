# Linux - Scp

## What It Is

- [OpenSSH](linux-openssh.md) secure file copy

VS [sftp](linux-sftp.md)

- sftp is interactive client, which can
  - mkdir
  - delete dir

```
sftp>mkdir test
```

## How to Use

Syntax

```bash
scp file/path [user@]host:[remote/filename]
```

- path/of/file: local file path
- user: remote host user name
- host: remote host ip address or domain name
- remote/filename: remote file path

options

- r: recursive copy