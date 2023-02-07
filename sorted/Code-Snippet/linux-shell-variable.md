# Linux变量

## 变量类型

- 局部变量: 定义在程序或命令中
- 环境变量:
- shell变量

## 局部变量

定义变量

```shell
name = 123
```

使用变量, 使用$

```shell
echo $name
```

通过`read`从标准输入中读取变量


```sh
read -p "what is your name" name
echo "hello $name"
```
使用命令参数占位符$1, $2, $3, ...

```sh
name=$1
content=$2
echo "Good Morning $name!!"
echo "You are looking good today $content!!"
```

get local value from other command

```sh
whereami=`pwd`
echo "You are in $whereami"
```

- `pwd` can be replaced by `$(pwd)`

## 预定义变量

> 读取变量时需要再变量明前添加一个"$"

- UID 当前账户的ID
- USER当前账户的账户名称
- HOME 当前账户根目录
- LANG当前环境使用的语言
- PATH命令搜索目录
- PWD返回当前工作目录
- RANDOM 返回随机整数0~32767
- HISTSIZE 当前终端的最大历史命令条目
- `$0` 返回当前命令的名称( `$1`,   ``$2`第一个参数和第二个参数)
- `$?` 最后一次执行命令返回状态，0为成功，非0为失败
- `$$` 当前进程的进程号
- `$!` 后台运行的最后一个进程的进程号
