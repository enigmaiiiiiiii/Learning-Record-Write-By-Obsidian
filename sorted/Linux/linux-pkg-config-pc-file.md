# pkg-config - .pc files

* [take a look](#take-a-look)
* [keyword lines](#keyword-lines)
* [variable lines](#variable-lines)

## take a look

`foo.pc` files

```
# This is a comment
prefix=/home/hp/unst   # this defines a variable
exec_prefix=${prefix}  # defining another variable in terms of the first
libdir=${exec_prefix}/lib
includedir=${prefix}/include

Name: GObject                            # human-readable name
Description: Object/type system for GLib # human-readable description
Version: 1.3.1
URL: http://www.gtk.org
Requires: glib-2.0 = 1.3.1
Conflicts: foobar <= 4.5
Libs: -L${libdir} -lgobject-1.3
Libs.private: -lm
Cflags: -I${includedir}/glib-2.0 -I${libdir}/glib/include
```

this file has several entries

- location of header files
- version information
- description
- ...

has two kinds of lines

- variable lines: `key=value` 
- keyword lines: `keyword: value`

## keyword lines

syntax `keyword: value`

- `keyword` must have special meaning in pkg-config

available keywords:

- `Name`: human-readable name
- `Description`: description of package
- `URL`: where people can get more information and download
- `Version`: 
- `Requires`: list of packages that this package requires, separated by comma
- `Requires.private`: list of packages that this package requires, but only for compiling
- `Conflicts`: 
- `Libs`: [Link flags](gcc-options.md#-lfoo,--l-libfoo.a) of your package
- `Libs.private`: ...
- `Cflags`: List the [compile flags](gcc-options.md#-i-dir) of your package, don't include required package, pkgconfig will add those automatically

## variable lines

- key can be any string

