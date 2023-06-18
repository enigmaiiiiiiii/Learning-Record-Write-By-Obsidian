# bash

## What It Is

## Bash Command

[bash command](linux-command-bash.md)

`bash [options] [command_string | filename]`

options

`-c`

- 从字符串读取命令, 用`$0`, `$1`, ... 分别替换为`command_string`后的第一个参数, 第二个参数, ...

## BASH_SOURCE\[0\] VS $0

- in most cases, they are the same

```sh
echo "\$0: $0; BASH_SOURCE[0]: ${BASH_SOURCE[0]}"
```
