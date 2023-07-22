# Linux - Tricks

* [pipe](#pipe)
* [sed](#sed)
* [awk](#awk)
* [head](#head)
* [grep](#grep)
* [alias](#alias)
* [get last command output](#get-last-command-output)
* [let command output as another command's parameter](#let-command-output-as-another-command's-parameter)
* [jump back to previous directory](#jump-back-to-previous-directory)
* [Running Command In Background](#running-command-in-background)

## pipe

- use `|` to redirect output to another process
- can not use with file directly
- those command usually follow after "|"
  - [`grep`]()
  - [`awk`]()
  - [`sed`]()
  - [`sort`]()
  - [`uniq`]()
  - [`wc`]()
  - [`head`]()
  - [`tail`]()

## sed

[sed](linux-sed.md)

## awk

[awk](linux-awk.md)

## head

- use for display first nth lines of a file or standard input

for command

```sh
dnf list installed | head -n 5
```

for file

```sh
head -n 5 /etc/passwd
```

## grep

- use for searching and filtering text based on patterns

`grep [-a/c/i/n/v] 'string' filename`

- `-a`:
- `-c`:
- `-i`: ignore case
- `-n`:
- `-v`: reverse match

## alias

- define shortcut for command

```sh
alias ..='cd ..'  # type .. go back to parent directory
```

## get last command output

use `!!` to get last command output

```sh
echo "hello world"
```

then `echo !!` will

```sh
echo !!
```

## let command output as another command's parameter

use `$(command)` to get command output

- for example, use `date` command to get current date

```sh
echo "Today is $(date)"
```

remove related package

```sh
sudo apt remove $(dpkg-query --show --showformat='${Package}\n' | grep -i 'package-name')
```

remove all trusted sources in [firewalld](linux-firewalld.md)

```sh
sudo firewall-cmd --remove-source=$(sudo firewall-cmd --list-sources) --permanent
```

## jump back to previous directory

```sh
cd -
```

back to two more previous directory

```sh
cd ~2
```

## Running Command In Background

- add `&` after command, it will run in background, you can continue use bash

VS [&&](linux-shell-operators.md#logic-operator)

