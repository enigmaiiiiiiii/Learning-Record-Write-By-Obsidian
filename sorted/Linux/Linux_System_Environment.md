# System Environment

[PATH](#path)
[/etc/profile](#etcprofile)
[/etc/profile.d](#etcprofiled)
[/etc/bashrc](#etcbashrc)

## PATH

## etc/profile

- 通常用来定义系统变量, 用户限制
- /etc/profile**只对交互shell执行**

example /etc/profile

```bash
# /etc/profile: system-wide .profile file for the Bourne shell (sh(1))
# and Bourne compatible shells (bash(1), ksh(1), ash(1), ...).
if [ "$PS1" ]; then
   if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
   fi
fi


if [ -x /usr/bin/id ]; then
   USER="`id -un`"
   LOGNAME=$USER
   MAIL="/var/spool/mail/$USER"
fi

export USER LOGNAME MAIL

for i in /etc/profile.d/*.sh ; do
    if [ -r "$i" ]; then
     . $i
    fi
done
export text="hello"
```

1. 检查是否定义了PS1变量, 如果是, 那么此次登录是交互式登录
2. 检查是否存在`/etc/bash.bashrc`文件, 如果存在, 则执行
3. 检查文件/usr/bin/id是否可执行，如果是，则获取用户id、登录名并指向电子邮件文件
4. 检查/etc/profile是否存在D目录，如果它存在，执行目录中的每个文件
5. 设置text变量, 用于测试, 保存后注销, 输入`echo $text`, 输出`text`

## etc/profile.d

- /etc/profile还将[执行](Linux_Bash_BuiltIn_Command.md#source)/etc/profile.d/*.sh脚本
- 设置自己的系统范围的环境变量，建议将配置放在/etc/profile.d中的shell脚本中

## /etc/bashrc

- `/etc/bashrc`对交互和非交互shell都执行
- 在Ubuntu中`/etc/profile`直接调用`/etc/bashrc`
