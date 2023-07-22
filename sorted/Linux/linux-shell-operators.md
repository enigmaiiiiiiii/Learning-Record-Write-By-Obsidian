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

- VS [`|`](linux-trick-commands.md#pipe)
  - `|` is used to connect the **output** of one command to the **input** of another.

```sh
ls -l | grep "txt"
```

`&&`: AND

```sh
command1 && command2
```

- `command2` will be executed if and only if `command1` returns an exit status of zero
- Compare to [`&`](linux-trick-commands.md#running-command-in-background)
  - `&` is used to run a command in the background


## string operator

