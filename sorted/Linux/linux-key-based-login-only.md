# Linux - Key-based Login Only

## What Will Happen After Finish This Setup

assume that user name `foo`, and host name `remote_ip`

- use ssh to login with `foo` user name
  - Before Setup, it will ask for password
  - After Setup, login directly without password
- it was only effect on `ssh foo@remote_ip`
- `ssh bar@remote_ip` will be permission denied

## Step 1: Config Server SSH Service

```sh
vim /etc/ssh/sshd_config
```

modify configuration like following

```sh
PasswordAuthentication no
PubkeyAuthentication yes # although default yes, just make a evidence
```

## Step 2: genrate key pair

- [generate key pair](linux-openssh.md#ssh-keygen) on client

## Step 3: Transfer Public Key to Server

- On Server: `~/.ssh/authorized_keys` list the public keys that are permitted for logging in

```sh
scp ~/.ssh/id_rsa.pub foo@remote_ip:~/.ssh/authorized_keys
```

or use `ssh-copy-id`

```sh
ssh-copy-id foo@remote_ip
```
