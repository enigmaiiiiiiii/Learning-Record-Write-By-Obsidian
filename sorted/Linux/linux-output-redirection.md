# Linux - Output Redirection

* [Redirect Output](#redirect-output)
* [Redirect Error](#redirect-error)
* [Redirect But Append](#redirect-but-append)
* [Redirect To Another Process](#redirect-to-another-process)
* [Redirect to nowhere](#redirect-to-nowhere)
* [Redirect to stdout and stderr](#redirect-to-stdout-and-stderr)

## Redirect Output

- `> target`: redirect output to a target
- `1` is the [file descriptor](linux-file-descriptor.md) of STDOUT
- [STDOUT]() is default output

That is to say those two write the same thing to `ps.txt`

```sh
ps > ps.txt
ps 1> ps.txt
```

## Redirect Error

```sh
ls /abc 2> error.txt
```

this command will write the following message to `error.txt`

which is the error message of `ls /abc`

```sh
ls: cannot access '/abc': No such file or directory
```

## Redirect But Append

- use `>>` instead of `>`

## Redirect To Another Process

- use `|` to redirect output to another process

```sh
ps -ef | grep "bash"
```

## Redirect to nowhere

when you want to ignore the output of a command

for example

- `tar` command no find the file `noexist.txt`

```sh
$ tar cvf temp.tar ls.txt ps.txt noexist.txt
ls.txt
ps.txt
tar: noexist.txt: Cannot stat: No such file or directory
tar: Exiting with failure status due to previous errors
```

- if you don't care the error message

```sh
$ tar cvf temp.tar ls.txt ps.txt noexist.txt 2> /dev/null
ls.txt
ps.txt
```

## Redirect to stdout and stderr

link file that wanted to redirect to [`/dev/stdout` and `/dev/stderr`](linux-system-directory.md#/dev)

```sh
$ ln -s /dev/stdout logfile
```

