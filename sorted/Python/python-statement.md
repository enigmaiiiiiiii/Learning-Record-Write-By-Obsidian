# Python - Statement

## import statement

`import module [as identifier]`

- import [module](python-glossary.md#module)
- import statement can only used to import module

`from relative_module import attribute/submodule`

- can be used to import [attribute](python-module.md) from module
- attribute can be
  - function 
  - class
  - variable
  - `*` means import all
- can be used for [relative import](python-import-system.md#relative-import)
  - one dot `.` means current directory
  - two dots `..` means parent directory

> execute `from ..subpkg2 import mod` within `subpkg1`,it will import `pkg.subpkg2.mod`



