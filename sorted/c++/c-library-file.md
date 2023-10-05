# C - Library File

* [What It Is](#what-it-is)
* [Library Nameing Convention](#library-nameing-convention)
* [Soname](#soname)
* [How To Use Libraries](#how-to-use-libraries)
* [Search Path](#search-path)
* [Create A Shared Library](#create-a-shared-library)
* [Link A Shared Library](#link-a-shared-library)
* [Install A Shared Library On System](#install-a-shared-library-on-system)

## What It Is

- Can be considered a **collection** of [object files(.o)](c-object-file.md)

> similar concept in other language like [nodejs package](nodejs-module-system.md), [python](python-package.md), [java]()

*Static Library*

- files with `.a` and `.lib`
- generates a static library file `libstaticmath.a` from target files `StaticMath.o`

```sh
ar -crv libstaticmath.a StaticMath.o
```
- Features of Static Library
  - **Linking is done at compile time**.
  - **Wastes space and resources**: because all related target files and associated function libraries are linked into a single executable file.
  - **Need recompiled**: If the static library is updated, all files using it **need to be recompiled**.


**Shared Library**

> also called dynamic library

- `.so` and `.dll` files
- **On Linux** executable files compiled with GCC  are typically in **ELF format**
  - do not require an initialization entry point 
  - do not special function declarations.
- **On Windows**, executable files are in the **PE format**
  - dynamic libraries require a `DllMain` function as an initialization entry point
  - Usually, declarations of exported functions need the `_declspec(dllexport)` keyword.
- Features
  - Are loaded at **runtime**, therefore, updating only requires updating the corresponding dynamic library.
  - Simplify program updates.
  - Can facilitate sharing between processes, hence they are also known as shared libraries.


## Library Nameing Convention

- in Linux: library name = `lib` + `name` + `.a`/`.so`
- in Windows: library name = `lib` + `name` + `.lib`/`.dll`

## Soname

- shared library has a special name called **soname**
- soname means **shared object name**
- followed by a period and a version number that is **incremented whenever the interface changes**
- file with soname usually a [symbolic link](linux-ln.md#symbolic-link) to the real shared library file

> lowest-level C libraries don't start with `lib`

## How To Use Libraries

- **Start Up Program**: On GNU system, there is a loader to find and load all other shared libraries use d by the program
- [Search Path]()

## Search Path

- sometimes write in `/etc/ld.so.conf`
- mostly is `/usr/lib`, `/usr/local/lib`
- can be specified by `gcc -L` option

## Create A Shared Library

> it is generally recommended to use the `-fPIC` option and compile to [object file](c-object-file.md) before link 

step 1: create object files

```sh
gcc -c -fPIC foo.c -o foo.o
gcc -c -fPIC bar.c -o bar.o
```

step 2: link [object file](c-object-file.md) to library file

```sh
gcc -shared -o libfoo.so foo.o bar.o
```

> compile in one step and without `-fPIC` is also work
> `gcc -shared -o libfoo.so foo.cpp`

## Link A Shared Library

simply link with `-l` option

```sh
gcc -lfoo main.c -o main
```

link with specific library [search path](#search-path)

> search path is important for custom library

- option 1: gcc `-L` options

```sh
gcc -L/path/to/lib -lfoo main.c -o main
```

- option 2: `LD_LIBRARY_PATH`, a `;` separated list of paths

## Install A Shared Library On System

- just copy the shared library to a directory in the [search path](#search-path), e.g. `/usr/lib`

## Experiments: Create, Install, Link A Shared Library

[experiment](c-library-file-experiment.md)

