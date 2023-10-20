# GCC - Options

* [-o](#-o)
* [-lfoo, -l libfoo.a](#-lfoo,--l-libfoo.a)
* [-Ldir](#-ldir)
* [-Wl,options](#-wl,options)
* [-fPIC](#-fpic)
* [-I dir](#-i-dir)
* [-S](#-s)
* [-E](#-e)
* [-v](#-v)
* [-c](#-c)
* [-shared](#-shared)

## -o

- `gcc -o executable_file sourcefile`
- running **complete** compile process, generate file with postfix `.exe` or `.out`
- this file called [executable file](executable-file.md)

## -lfoo, -l libfoo.a

- search for file `libfoo.a` or `libfoo.so` 
- search for library name foo
- search path is standard system directories and directories specified by `-L` option
- second alternative only for POSIX compliance and is not recommended

## -Ldir

- add directory dir to the list of directories to be searched for `-l`
- default [search path](c-library-file.md#search-path) is here
- `~` is not support

## -Wl,options

- pass `options` as [linker's](gnu-linker.md) options

> **caveat**: there is no space between `-Wl` and `,` and `options`

## -fPIC

- emit [position-independent code](position-independent-code.md)

## -I dir

> Add the directory `dir` to the list of directories to be searched for [header files](c++-header-file.md) during preprocessing

- Add the directory `dir` to [header files](c++-header-file.md) search path
- header file not directly include by `dir` won't be searched 

## -S

- `gcc -S sourcefile`
- running first two steps, generate file with postfix `.s`
- this file called [assembly file]()

## -E

- `gcc -E hello.c > hello.txt`
- only active the preprocess step

## -v

## -c

- running [first three steps](gcc.md#compilation-process-of-gccg), but not link, generate file with postfix `.obj` or `.o`
- this file called [object file](c-object-file.md)

```sh
gcc -c hello.c
```

## -shared

- use to create a [shared library](c-library-file.md)

## -std

- determine the language standard
- available value like, `c90`, `c99`, `c11`, `c17`, `gnu90`, `gnu99`, `c++11`, `c++20`, etc.

