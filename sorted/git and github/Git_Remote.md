# Git远程

[生成SSH Key](Git_SSH.md)

## 设置远程仓库

```bash
git remote add origin <REMOTE_URL>
```
- origin: 远程仓库的别名
- REMOTE_URL: 远程仓库的URL

## 推送到远程

- git push -u origin master: 将master分支推送到远程仓库
  - master: 本地分支
  - origin: 远程仓库的别名

## 拉取远程仓库

- git pull origin master: 将远程仓库的master分支拉取到本地
  - master: 远程分支
  - origin: **远程仓库的别名**, 不是本地分支

## 访问权限

[凭据管理程序](Git_Credential_Manager.md)

[GitHub个人令牌(Personal Access Token)](Github_Personal_Access_Token.md)

## Contribute to Project

[personal team]

[Public Project](Git_Forked_Public_Project.md)

[创建Pull Request](Github_Create_Pull_Request.md)
