# Linux - awk

* [What Is For](#what-is-for)
* [practical use](#practical-use)
* [Syntax](#syntax)
* [reference a field](#reference-a-field)
* [Reference a line](#reference-a-line)
* [options](#options)
* [program text](#program-text)

## What Is For

- line-oriented text **language**
- it is useful when dealing with **structured text files**, like csv
- *fields* represents the columns name
- *lines* represents the rows

## practical use

print `ps` output first column

```sh
ps | awk '{print $1}'
```

print all user in `/etc/passwd`

```sh
awk -F ":" '{print $1}' /etc/passwd
```

search with pattern

```sh
df | awk '/dev/ {print $1}'
```

with condition expression

```sh
docker ps -a | awk '$2 == "hello-world" {print $1}'
# print the container id whose image is hello-world
```

awk with script

```sh
awk 'BEGIN { for(i=1; i<=10; i++) print "The square root of", i, "is", i*i }'
```

print first 10 lines

```sh
awk 'NR <= 10' /etc/passwd
```

## Syntax

- `awk [options] 'program-text' file`

## Reference a field

- `$0`: whole line
- `$1`: first field
- `$2`: second field
- `$NF`: last field

```
    PID TTY          TIME CMD
 974608 pts/6    00:00:00 ps
3939536 pts/6    00:00:03 zsh
```

In above example coresponding fields are

- `$1`: PID
- `$2`: TTY
- `$NF`: CMD

## Reference a line

- `NR`: current line number

## options

- `-F`: set field separator

## program text

- awk is a language

structure of program text

- `pattern { statement }`

I/O statements

- `print`: print current record
