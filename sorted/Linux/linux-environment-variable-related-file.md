# file related to environment variable

* [/etc/environment](#etcenvironment)
* [~/.profile](#profile)
* [/etc/profile](#etcprofile)
* [/etc/profile.d](#etcprofiled)
* [/etc/.bashrc](#etcbashrc)

## Environment Variable Load Order

1. `/etc/environment`
2. `~/.profile`
3. `/etc/profile`
4. `/etc/profile.d/*.sh`
5. `/etc/.bashrc`


## /etc/environment

- define the environment variable (temporarily i call it environment variable)
- **not read by shell**
- it is **not recommend** to modify `/etc/environment` to set environment

```sh
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
```

## ~/.profile

use `~/.profile` to set environment variable for current user

```sh
PATH="$PATH:/your/additional/path"
```

## /etc/profile

- `/etc/profile` only run on interacting shell
- usually use to define Shell variable

take a look at a `/etc/profile`:

```bash
# /etc/profile: system-wide .profile file for the Bourne shell (sh(1))
# and Bourne compatible shells (bash(1), ksh(1), ash(1), ...).
# 1
if [ "$PS1" ]; then
   # 2
   if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
   fi
fi


# 3
if [ -x /usr/bin/id ]; then
   USER="`id -un`"
   LOGNAME=$USER
   MAIL="/var/spool/mail/$USER"
fi

export USER LOGNAME MAIL

# 4
for i in /etc/profile.d/*.sh ; do
    if [ -r "$i" ]; then
     . $i
    fi
done

# 5
export text="hello"
```

1. check if `PS1` variable defined, if yes, this is interactive login
2. check if `/etc/bash.bashrc` **file exist**, if yes, execute it
3. if `/usr/bin/id` is executable, get user id, set `USER`, `LOGNAME` and `MAIL` variable
4. check if `/etc/profile.d` directory exist, if it is, execute every file in it
5. set `text` variable, for test, logout, input `echo $text`, output `text`

> `-f`: check if file exist
> `-x`: check if file is executable

## /etc/profile.d directory

- script in `/etc/profile.d` will be [executed](linux-bash-builtin-command.md#source) by `/etc/profile`

which variable should be set in `/etc/profile.d`?

- it's not recommend to modify `/etc/profile` directly

## /etc/.bashrc

- `/etc/.bashrc`对交互和非交互shell都执行
- In Ubuntu `/etc/profile` call `/etc/bashrc` directly

if [zsh](https://https://github.com/ohmyzsh/ohmyzsh/wiki/installing-zsh) installed, there is a file `~/.zshrc`

