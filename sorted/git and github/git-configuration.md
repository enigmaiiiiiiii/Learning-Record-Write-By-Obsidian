# 配置git

- 通过git config命令: 获取和设置配置变量

查看所有设置

```shell
git config --list --show-origin
```

## 变量配置在3个地方

> 内层会覆盖外层配置

配置单个存储库(.git directory, 所在目录)

- `.git/config`文件
- `git config --local`设置
- 最内层配置

用户全局配置文件

- `~/.gitconfig`文件
- 通过`git config --global`设置

包含系统上的每个用户及其所有存储库的值;

- `[path]/etc/gitconfig`
- `git config --system`进行设置, 需要管理员或超级用户权限才能对其进行更改。
- 最外层配置

## .config文件格式

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "NoteLab"]
	url = https://github.com/enigmaiiiiiiii/Learning-Record-Write-By-Obsidian.git
	fetch = +refs/heads/*:refs/remotes/NoteLab/*
[branch "trunk"]
	remote = NoteLab
	merge = refs/heads/trunk
[http]
	proxy = 127.0.0.1:8100
```

## config proxy

使用命令

```bash
git config --global/local/system http.proxy http://proxy.server.com:port
```

修改config文件, 添加:

```
[http]
    proxy = http://proxy.server.com:port
```

check current config

```bash
git config --local --get http.proxy
```

unset proxy

```bash
git config --local --unset http.proxy
```

