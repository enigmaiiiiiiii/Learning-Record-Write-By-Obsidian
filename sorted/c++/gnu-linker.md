# GNU linker

## What It Is

ld is a command to

- combine several [object files](c-object-file.md) and libraries
- resolve references
- and produce an output file
  - a final linked image
    - [executable](executable-file.md)
    - [dylibrary](c-library-file.md#dynamic-library)
    - [bundle]() ?
  - or another object file

## Take A look

ld can be invoked in [gcc](gcc.md) command

```sh
gcc -Wl,--start-group foo.o bar.o -Wl,--end-group
```

- if gnu linker is invoked indirectly by compiler command such as GCC, then any linker command-line options that are specified should either be prefixed by `-Wl,` 

```sh
ld -o <output> /lib/crt0.o hello.o -lc
```

- What this command do 
  - link `/lib/crt0.o` and `hello.o` and a library file `libc.a` from standard search directories
  - generate a file named `output`

> `-lc` indicate library file `libc.a`

## options



