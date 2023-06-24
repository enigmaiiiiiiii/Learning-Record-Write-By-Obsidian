# Linux - Command ln

* [What It Is](#what-it-is)
* [About What Target Should Input](#about-what-target-should-input)
* [hard link](#hard-link)
* [Symbolic Link](#symbolic-link)
* [Options](#options)

## What It Is

- make links between files
- 2 types different links
  - [hard link](#hard-link)
  - [symbolic link](#symbolic-link)

SYNOPSIS

`ln [OPTION]... [-T] TARGET LINK_NAME`

- `LINK_NAME` should not already exist

## About What Target Should Input

for example target `.vimrc` is a file in `~/dotfiles`

```sh
cd ~/dotfiles
ln -s .vimrc ~/.vimrc
```

check file information with `ls -l ~/.vimrc`

```sh
lrwxrwxrwx 1 username group 7 2019-01-01 00:00 $HOME/.vimrc -> .vimrc
```

- it instructs that `.vimrc` is a symbolic link to `.vimrc`
- not the file `~/dotfiles/.vimrc` what i expect

**conclusion**

- `TARGET` is a string describe symbolic link will be link to
  - path relative to LINK_NAME
  - or absolute path

## hard link

- default link type
- Target must exist

## Symbolic Link

- set with `--symbolic`
- each argument not to be exist

## Options

- `-s`: create [symbolic link](#symbolic-link)
