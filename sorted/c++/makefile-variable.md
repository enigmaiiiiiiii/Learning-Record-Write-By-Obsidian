# Makefile - variable

## Features

- case-sensitive
- not like shell script, `$(command $(arguments))` is not work, use [shell command](makefile-functions.md#shell-function) arguments instead

## Reference Variable

reference variables with `$(var)` or `${var}`
## Recursively Variable Assignment

operator `=` is to **recursively assign variable**

```makefile
foo = $(bar)
bar = $(ugh)
ugh = Huh?
all:
  echo $(foo)
```

- this will echo `Huh?`

cause its recursively assignment, this ways **not allows to append value** to variable

```makefile
CFLAGS = $(CFLAGS) -O
```

this will cause **infinite loop**

## Expand Variable

> this works like variable in most languages

using `:=` to **expand variable**

- [reference a variable](#reference-variable) in `:=` expression will scanned once and expand as the text your write

```makefile
x := foo
y := $(x) bar
x := later
all:
    echo $(y)
```

this will echo `foo bar`

```makefile
x := foo
y = $(x) bar
x := later
all:
    echo $(y)
```

this will echo `later bar`

## Append Text To Variable

```makefile
objects = main.o foo.o bar.o utils.o
objects += another.o
```

equivalent to

```makefile
objects = main.o foo.o bar.o utils.o
objects := $(objects) another.o
```

## Automatic variables

- `$@`: target name
- `$^`: all prerequisites
- `$<`: first prerequisite

## variables used by [implicit rules](makefile-implicit-rules.md)

- variables can be used without define them
- all those variable can be canceled by `-R` or `--no-builtin-vairbales` 

variable list

- `CC`: Compiler for compiling C program; default `cc`
- `CXX`: Compiler for compiling C++ program, default `g++`
- `CFLAGS`: Extra flags to give to the C compiler
- `CXXFLAGS`: Extra flags to give to the C++ compiler
- `CPPFLAGS`: Extra flags to give to the C preprocessor
- `LDFLAGS`: Extra flags give to when compiler invoke [linker]() 
