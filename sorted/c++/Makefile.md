# Makefile

## What It Is

- used to help which parts of a large program need to be recompiled
- mostly used in C or C++ compile

## Take A Look 

```
all:hello
hello:main.o sum.o
    gcc -o hello main.o sum.o
main:o:main.c
    gcc -c main.c
sum.o:sum.c
    gcc -c sum.c
clean:rm -f main.o sum.o hello
```

## Syntax

```
targets:prerequisites
    command
    command
    command
```

- `targets`: file names to be created, separated by spaces
- `prerequisites`: also file names, need to be exist before the commands run
- `command`: steps to create the target file

