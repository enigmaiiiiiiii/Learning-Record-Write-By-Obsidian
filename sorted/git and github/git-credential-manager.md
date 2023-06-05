# Git - Credential Manager

## What It is

- Git Credential Manager, GCM
- use to avoid input password every time
  - through HTTPS, git requires username and password
  - git credential manager can save username and password for next time access

## Installation

windows

- 使用git安装程序安装
- 通过gcm单独安装包

Linux

- 通过脚本安装

```bash
curl -LO https://raw.githubusercontent.com/GitCredentialManager/git-credential-manager/main/src/linux/Packaging.Linux/install-from-source.sh &&
sh ./install-from-source.sh &&
git-credential-manager-core configure
```

## credential contexts: 凭据上下文

- 每个凭据都有一个由URL定义的上下文
- 基于上下文查找特定配置(URL对应的密码和用户)

## 通过添加配置使用

- `.gitconfig`中配置GCM
- 上下文配置
  - `credential.*`: 应用于所有用户名密码
  - `cerdential.<URL>.*`: 应用于特定URL的用户名密码

- 在配置中添加可用的凭据
  - `git config --global credential.helper store`
  - 在`~/.gitconfig`中保存凭据

```bash
git credential-manager-core [command [args]] 
```

设置helper: 自定义凭据管理程序

## Credential Storage

- SSH用密钥配对，HTTP协议中不可用

## Git Credential的典型应用

- 基于上下文生成Credential

