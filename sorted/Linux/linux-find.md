# linux - find

## Practical Use

Find single file in root directory

```sh
find / -name "Foo.txt"
```

Find `.txt` file in current directory with content `hello world`

```sh
find * -name "*.txt" -exec grep -H "hello world" {} \;
```

Find file by type in home directory whose type is regular file

```sh
find ~ -type f
```

- `-type f`: regular file
- `-type d`: directory

Find file haven't been modified in 30 days

```sh
find /var/log/ -iname "*.log" -mtime +30
```

- `-mtime +30`: file that modified $30 \times 24$ greater than hours
- `-mtime -30`: file that modified $30 \times 24$ less than hours

Delete all files with specific extension

```sh
find . -name "*.txt" -exec rm -rf {} \;
```

## Syntax

`find [options] [path...] [expression]`

path

- `.`: is default path, represents current directory
- `*`: represents all files in current directory

[expression](#expression)

- ...

## Options

`-H`, `-L`, `-P`: control the treatment of [symbolic links](linux-ln.md)

- `-H`: if the command line argument is a symbolic link to a directory, traverse it

`-exec` series options

## Expression




