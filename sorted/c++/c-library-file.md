# C - Library File

## Static Library

What It Is

- `.a` and `.lib` files
- Can be considered a collection of [target files(.o)](c-object-file.md)

For example

```sh
ar -crv libstaticmath.a StaticMath.o
```

- generates a static library file `libstaticmath.a` from target files `StaticMath.o`

Features

- **Linking is done at compile time**.
- **Wastes space and resources**: because all related target files and associated function libraries are linked into a single executable file.
- **Need recompiled**: If the static library is updated, all files using it **need to be recompiled**.

## Dynamic Library

What It Is

- `.so` and `.dll` files
- **On Linux** executable files compiled with GCC  are typically in **ELF format**
  - do not require an initialization entry point 
  - do not special function declarations.
- **On Windows**, executable files are in the **PE format**
  - dynamic libraries require a `DllMain` function as an initialization entry point
  - Usually, declarations of exported functions need the `_declspec(dllexport)` keyword.

Features

- Are loaded at **runtime**, therefore, updating only requires updating the corresponding dynamic library.
- Simplify program updates.
- Can facilitate sharing between processes, hence they are also known as shared libraries.

