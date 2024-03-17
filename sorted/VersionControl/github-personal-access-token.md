# Git - Personal Access Token

## Create

- Settings -> Developer settings -> Personal access tokens
- 设置名称
- 设置到期时间
- 选择作用权限
- Click Generate token

## Usage

- when access remote repository via https, provide token instead of password

```bash
$ git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```
