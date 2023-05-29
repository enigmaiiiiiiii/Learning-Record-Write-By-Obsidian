# Linux Shell - Variable

## Variable type

- [local variable](#local-variable)
- [environment variable](#environment-variable)
- [shell variable](#shell-variable)

## local variable

define variable

```shell
name = 123
```

`$` to get variable value

```shell
echo $name
```

use `read` to get input from user


```sh
read -p "what is your name" name
echo "hello $name"
```

use input parameter placeholder `$1`, `$2`, `$3`, ... to get input value

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

## environment variable

## shell variable

## Predefined variable

- `UID`: current user id
- `USER`: current user name
- `HOME`: current user home directory
- `PATH`: command search path
- `LANG`: current language
- `PWD`: current working directory
- `RANDOM`: return random number, range from 0 to 32767
- `HISTSIZE`: max number of command history
- `$0`: return current command name, while `$1`, `$2`: first and second parameter
- `$?`: the last command return status, 0 for success, non-0 for fail
- `$$`: current process id
- `$!`: last process id running in background
