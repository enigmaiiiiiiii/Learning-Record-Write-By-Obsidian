# Linux - Handle Stream

* [pipe](#pipe)
* [sed](#sed)
* [awk](#awk)
* [head](#head)
* [grep](#grep)
* [wildcard](#wildcard)

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
  - [`cut`]()

## perl

[perl](linux-perl.md)

## sed

[sed](linux-sed.md)

## awk

[awk](linux-awk.md)

## cut

[cut](linux-cut.md)

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

## wildcard

[wildcard](linux-wildcard.md)

## envsubst

[envsubst](linux-envsubst.md)

