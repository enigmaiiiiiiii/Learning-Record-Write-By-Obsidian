# Git - SSH

## Generate SSH Public key

1. Open Git Bash
2. Enter `ssh-keygen -t ed25519 -C "anonymous@example.com"`

> in step 2, use your email address as a label to generate SSH key

- base on ed25519 [algorithm](), generate public/private key pair
- `-t`: specify key type(algorithm type)
- `-C`: provide a comment

3. system prompt `Enter a file in which to save the key(/c/Users/you/.ssh/id_algorithm): [Press Enter]`

- set where to store the key file, enter to accept default

4. prompt to enter passphrase

---

modified passphrase

`ssh-keygen -p -f ~/.ssh/id_ed25519`

file list create in `~/.ssh` by above steps

- id_ed25519
- id_ed25519.pub

## Check Exist SSH keys

1. Open Git Bash
2. Enter `ls -al ~/.ssh`
3. if `public SSH key` already exist, file name may be:
    - id_rsa.pub
    - id_ecdsa.pub
    - id_ed25519.pub

## ssh-agent

- 用于保存私钥的程序, 用于私钥的公钥认证
- 通常在X-session或登陆会话开始时启动
- 所有其他程序或窗口作为ssh-agent的客户端启动

## Algorithm

- RSA
- ECDSA
- Ed25519

