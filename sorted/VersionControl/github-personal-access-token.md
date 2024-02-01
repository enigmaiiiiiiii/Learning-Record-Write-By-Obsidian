# Git - Personal Access Token

## Create

- Settings -> Developer settings -> Personal access tokens
- 设置名称
- 设置到期时间
- 选择作用权限
- 单击Generate token

## Usage

> 只能作用于HTTPS GIT操作

- 通过https访问远程仓库时, 提供token, 代替密码

```bash
$ git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```
