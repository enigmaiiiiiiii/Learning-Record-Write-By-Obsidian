# Linux - OpenSSH

## What It Is

- tool for remote login with the [SSH Protocol](computer-network-ssh.md)

## What Does It Consist Of

Remote operation are done

- [ssh](#ssh)
- scp
- sftp

Key management

- [ssh-keygen](#)
- ssh-keyscan
- ssh-add
- ssh-keysign

Service Side

- [sshd](#sshd)
- sftp-server
- internal-sftp
- ssh-agent

## sshd

[sshd](linux-openssh-sshd.md)

## ssh-keygen

Syntax

`ssh-keygen [options]`

options

- `-t`: specify the [type](/sorted/Network/computer-network-ssh.md#key-pair) of key to create

practical use:

generate key pair

```sh
ssh-keygen -t rsa
```

- `-t rsa`: specify the type of key to create



