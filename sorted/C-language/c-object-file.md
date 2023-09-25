# C - Object File

## What It Is

- A file that lacks startup code[^start] cannot be executed directly.
- Usually has `.o` extension

## Feature

- The target file does not contain code of external library functions; its code is in its own [library files](c-library-file.md).
- The target file only contains machine language code written by the compiler.

[^start]: start up code acts as an interface between the program and the operating system. like `main` function.

