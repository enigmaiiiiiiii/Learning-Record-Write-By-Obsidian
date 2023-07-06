# Shell Programming - Operator

## Math Operator

`+, - , *, /, %, =, ==, !=`

- `%`: remainder, eg. 10 % 3 is 1

## relation operator

- `-eq`

## logic operator

`||`: OR

```sh
command1 || command2
```

- if first command failed, execute second command
- if first command success, do not execute second command

VS `|`

- "|" is used to connect the **output** of one command to the **input** of another.

```sh
ls -l | grep "txt"
```


## string operator

