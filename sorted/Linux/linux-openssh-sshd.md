# linux - OpenSSH sshd

## What It Is

- OpenSSH [daemon](linux-daemon.md)

## How to Config

Configuration File: `/etc/ssh/sshd_config`

Format: `keyword value`

Take a look at the config of [sftp](linux-sftp.md) [chroot jail](linux-change-root-jail.md)

```sh
Subsystem sftp internal-sftp

Match Group <sftpusers>
ChrootDirectory /var/sftp/<sftpusers>
ForceCommand internal-sftp
AllowTcpForwarding no
X11Forwarding no
```

- `<sftpusers>`: name of group you want to restrict
- `Subsystem`: load the internal-sftp service and make it available
- `Match`: match criteria on the Match line
  - following lines overide global section of config file
  - Scope: Another `Match` section or end of file
- `ForceCommand`: makes [ssh](linux-ssh.md) use built-in internal-sftp to provide SFTP service
- `ChrootDirectory`: where to restrict users to
