# Linux - SFTP Lock Down

## what will happen

what will happen after finish [those steps](#how-to-create-a-sftp-only-user) for sftp-only user setup?

1. you can't login in with `ssh`
2. you can login in with this user only with `sftp`
3. you can't see any file or directory except the home directory

## How To Create A Sftp-only User

> assume that user name `foo`, and host name `remote_ip`

**Step 1**: create user home directory

```sh
useradd -M -d /var/www/sub-domains/foo.com/html -g apache -s /usr/sbin/nologin foo
passwd foo
```

- `-M`: don't create home directory
- `-d`: specify home directory
- `-g`: specify group
- `-s`: specify shell
  - `/usr/sbin/nologin` for no login shell

**Step 2**: SSH configuration

- backup `/etc/ssh/sshd_config`

```sh
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```

- edit `/etc/ssh/sshd_config`

```sh
vim /etc/ssh/sshd_config
```

- near the end of the file modify it like this

```sh
# override default of no subsystems
# Subsystem   sftp   /usr/libexec/openssh/sftp-server
Subsystem     sftp   internal-sftp
```

- end of file add this

```sh
Match User foo
  ChrootDirectory /var/www/sub-domains/foo.com
  ForceCommand internal-sftp
  AllowTcpForwarding no
  X11Forwarding no
```

- `ForceCommand`: will set `foo` sftp service only

## Test It

1. use ssh login

```sh
ssh foo@remote_ip
```

- I will see

```sh
This service allows sftp connections only.
```

2. use sftp login

```sh
sftp foo@host
```

- success

3. check home directory and permission

```
sftp> pwd
Remote working directory: /
sftp> ls
html
sftp> cd ..
sftp> ls
html
```
