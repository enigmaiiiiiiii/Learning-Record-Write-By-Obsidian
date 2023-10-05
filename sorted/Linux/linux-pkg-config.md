# Linux - Tools pkg-config

* [What It Is](#what-it-is)
* [Install A Library With pkg-config Information](#install-a-library-with-pkg-config-information)
* [options](#options)
* [Environment Variable](#environment-variable)
* [.pc file](#.pc-file)

## What It Is

- get information about [installed libraries](c-library-file.md#install-a-shared-library-on-system)
- pkg-config retrieves information from [`.pc` files](#pc-file)
- pkg-config will search for .pc files from:
  - default directory: on most system pkg-config looks in `/usr/lib/pkgconfig`, `/usr/share/pkgconfig`, `/usr/local/lib/pkgconfig`, `/usr/local/share/pkgconfig`
  - directories specified by `PKG_CONFIG_PATH` environment variable
- various information may include
  - Parameters for [C or C++ Compiler](gcc.md)
  - Parameters for [linker], e.g
  - Package Version
  - ...

## Install A Library With pkg-config Information

## options

`--cflags`

- this prints pre-processor and [compiler flags](gcc-options.md#-i-dir)
- exits with nonzeor code if it can't find metadata

`--libs`

- this prints [linker flags](gcc-options.md#-lfoo,--l-libfoo.a)

`--variable=VARIABLE_NAME`

- this prints the value of the variable in .pc file

```sh
$ pkg-config --variable=prefix glib-2.0
$ pkg-config --variable pc_path pkg-config
```

- first print `prefix` variable in `glib-2.0.pc` file
- second print `pc_path` variable in `pkg-config.pc` file

## Environment Variable

`PKG_CONFIG_PATH`

- A list of directory paths separated by `:` to **search for .pc files**
- default path is

`PKG_CONFIG_DEBUG_SPEW`

## .pc file

[`.pc` file](linux-pkg-config-pc-file.md)

## Derived Variable

pkg-config sets a few metadata variables that can be used in .pc files or
queried at runtime.

`pc_path`

- The default search path used by pkg-config when searching for .pc
files. 
- query for the pkg-config module itself
itself:

```sh
$ pkg-config --variable pc_path pkg-config
```

`pcfiledir`

- The installed location of the .pc file. 
- can be used to query the location of the .pc file for a particular module
- also be used to make .pc files relocatable. For instance:

```
prefix=${pcfiledir}/../..
exec_prefix=${prefix}
libdir=${exec_prefix}/lib
includedir=${prefix}/include
```

`pc_sysrootdir`

- The sysroot directory set by the user. When the sysroot directory has not been set, this value is /.  See the `PKG_CONFIG_SYSROOT_DIR` environment variable for more details.

`pc_top_builddir`

- Location of the user's top build directory when calling pkg-config. This is useful to dynamically set paths in uninstalled .pc files. See the `PKG_CONFIG_TOP_BUILD_DIR` environment variable for more details.
