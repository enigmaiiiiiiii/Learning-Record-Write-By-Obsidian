# GIT - Configuration

## git config

- throught `git config` command: get and set configuration variables

check current config

```shell
git config --list --show-origin
```

## config variables are stored in 3 places

> internal will override external config

config for single git repository(where `.git` exists)

- edit file `.git/config` to config
- use `git config --local`
- this is the most internal config

global config file for current user

- edit file `~/.gitconfig` to config
- or use `git config --global`

for all users on this computer

- `[path]/etc/gitconfig`
- edit file `/etc/gitconfig` to config
- or use `git config --system`, need admin or super user permission to change it
- this the most external config

## what .config file looks like

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

with `git` command line interface

```bash
git config --global/local/system http.proxy http://proxy.server.com:port
```

modify config file, add following content:

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

