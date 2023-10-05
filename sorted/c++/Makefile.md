# Makefile

* [What It Is](#what-it-is)
* [Take A Look ](#take-a-look-)
* [rules](#rules)
* [Execution Process](#execution-process)
* [Variable](#variable)
* [Wildcards](#wildcards)
* [Function](#function)
* [Clean](#clean)
* [Phony Target](#phony-target)

## What It Is

- used to help which parts of a large program need to be recompiled
- mostly used in C or C++ compile

## Take A Look 

```makefile
all:hello
hello:main.o sum.o
    gcc -o hello main.o sum.o
main:o:main.c
    gcc -c main.c
sum.o:sum.c
    gcc -c sum.c
clean:rm -f main.o sum.o hello
```

## rules

[Syntax](makefile-syntax.md)

[implicit rules](makefile-implicit-rules.md)

[Double Colon Rules]()

## Execution Process

[execution process](makefile-execution-process.md)

## Variable

[variable](makefile-variable.md)

## Wildcards

`%` have several use

- used for write [pattern rules](makefile-implicit-rules.md) in target and prerequisites, represent nonempty substring
- in [variable]()
- in [function]()

```makefile
%.o: %.c
    gcc $(CFLAGS) -c -o $@ $<
```

> `*`, `?`, `[...]` 

## Functions

[Funtions](makefile-functions.md)

- shell function

## Phony Target

- it is a [recipe](#rules) that will be executed when you make an explicit request
- In some case the recipe for a target may not create a file, phony target is used to avoid a conflict with a file name

declare a target to be phony by making it [prerequisite](#rules) of the special target `.PHONY`

```makefile
.PHONY: clean
clean:
    rm *.o temp
```

- this will `make clean` run the recipe regradless of whether a file named `clean`

## Write A Makefile

[Makefile](makefile-writing.md)


