# linux - find

## Mainly Used For

1. Find files by filter [**file properties**](linux-file-properties.md), like

- name: use `-name` in [expression](#expression)
- size: use `-size` in [expression](#expression)
- type: use `-type` in [expression](#expression)
- time
- owner
- ...

2. Operate on them, include

- delete
- ...

## Practical Use

[Practical Use](linux-find-practical-use.md)

## Syntax

`find [options] [starting point...] [expression]`

[options](#options)

- `-H`
- `-L`
- `-P`

starting point

- ~~maybe a **path** of a directory or file?~~
- `.`: is default path, represents current directory
- `*`: represents all files in current directory

[expression](#expression), include:

- Tests
- Actions
- Global options
- Positional options
- Operators

## Options

`-H`, `-L`, `-P`: control the treatment of [symbolic links](linux-ln.md)

- `-H`: if the command line argument is a symbolic link to a directory, traverse it
- `-L`: when symbolic links was find, the actual file that the symbolic link points to will be find
  - unless it is a broken symbolic link, this feature can be used to find broken symbolic links
- `-P`: do not traverse any symbolic links

## Expression

- Expression is a part after starting points

Tests

> a comparison between the current file and some conditions

- `-name pattern`: file name matches pattern
- `-atime n`: file was last accessed n*24 hours ago

Actions

- `-exec` series expressions
- `-delete`: delete files
-

Global options

Positional options

Operators
