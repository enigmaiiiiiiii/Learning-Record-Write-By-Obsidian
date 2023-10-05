# C - Experiement: Create, Install, Link A Shared Library 

* [What Will Do](#what-will-do)
* [Project Structure](#project-structure)
* [Code](#code)
* [Create Library](#create-library)
* [pkg config](#pkg-config)
* [Link with pkg-config](#link-with-pkg-config)
* [Aggregate In Makefile](#aggregate-in-makefile)
* [Startup](#startup)

## What Will Do

- create a shared library named `libfoo.so`
- install it on path `$HOME/Code/Tutorial/hello-pkg-config/lib`
- add pkg-config information
- add path of where library installed to `PKG_CONFIG_PATH`
- link it to a programs named `hello`
- use makefile to complete the process

## Project Structure

.
├── add.c
├── sub.c
├── foo.h
├── foo.pc
├── main.c
└── Makefile

## Code

add.c

```c
int add(int a, int b) {
    return a + b
}
```

sub.c

```c
int sub(int a, int b) {
    return a - b
}
```

foo.h

```c
#ifndef FOO_H
#define FOO_H

int add(int a, int b);
int sub(int a, int b);

#endif
```

main.c

```c
#include <stdio.h>
#include "foo.h" 

int main() { 
  int a = 1;
  int b = 2;
  int ans1 = add(a, b);
  int ans2 = sub(a, b);
  printf("result add: %d\n", ans1);
  printf("result sub: %d\n", ans2);
  return 0; 
}
```

## Create Library

compile to shared library

- to [object file](c-object-file.md) first

```sh
gcc -c -fPIC add.c -o add.o
gcc -c -fPIC sub.c -o sub.o
```

- then link object file to shared library

```sh
gcc -shared -o libfoo.so add.o sub.o
```

## pkg config

foo.pc

```
prefix=${pcfiledir}/../..
exec_prefix=${prefix}
includedir=${prefix}/include
libdir=${exec_prefix}/lib

Name: Foo
Description: pkg-config test library
Version: 1.0.0
Cflags: -I${includedir}/foo
Libs: -L${libdir} -lfoo
```

> cause .pc file does not support use environment variable
> so use [pkg-config derived variable](linux-pkg-config.md#derived-variable) `pcfiledir` to get the path of .pc file

add path where library installed to `PKG_CONFIG_PATH`

```sh
export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:$HOME/Code/Tutorial/hello-pkg-config/lib
```

## Link with pkg-config

```
gcc -o hello main.c `pkg-config --cflags --libs foo`
```

## Aggregate In Makefile

```makefile
INSTALL_PATH            := $(HOME)/Code/Tutorial/hello-pkg-config
LIBRARY_FOO_NAME        := foo
LIBRARY_FOO_FILE        := lib$(LIBRARY_FOO_NAME).so
LIBRARY_FOO_HEADER_FILE := $(LIBRARY_FOO_NAME).h
LIBRARY_FOO_PC_FILE     := $(LIBRARY_FOO_NAME).pc
SOURCE_FILE             := main.c
EXECUTABLE_TARGET       := hello

$(EXECUTABLE_TARGET): install
	gcc -o $(EXECUTABLE_TARGET) $(SOURCE_FILE) $(shell pkg-config --cflags --libs $(LIBRARY_FOO_NAME))

install: $(LIBRARY_FOO_FILE) $(LIBRARY_FOO_HEADER_FILE) $(LIBRARY_FOO_PC_FILE)
	cp $(LIBRARY_FOO_FILE) $(INSTALL_PATH)/lib/$(LIBRARY_FOO_FILE)
	cp $(LIBRARY_FOO_PC_FILE) $(INSTALL_PATH)/lib/pkgconfig/$(LIBRARY_FOO_PC_FILE)
	cp $(LIBRARY_FOO_HEADER_FILE) $(INSTALL_PATH)/include/$(LIBRARY_FOO_HEADER_FILE)

$(LIBRARY_FOO_FILE): add.o sub.o
	gcc -shared -o $(LIBRARY_FOO_FILE) $^

%.o: %.c
	gcc -c -fPIC $^ -o $@

.PHONY: install uninstall test clean

uninstall:
	rm -f $(INSTALL_PATH)/lib/$(LIBRARY_FOO_FILE)
	rm -f $(INSTALL_PATH)/lib/pkgconfig/$(LIBRARY_FOO_PC_FILE)
	rm -f $(INSTALL_PATH)/include/$(LIBRARY_FOO_HEADER_FILE)

test:

clean:
	rm -f $(EXECUTABLE_TARGET)
	rm -f $(LIBRARY_FOO_FILE)
	rm -f *.o
```

what is in that makefile

- [makefile execution process](makefile-execution-process.md)
- variable
- [pattern rules](makefile-implicit-rules.md#pattern-rules)
- shell function
- [phony target]()
- [gcc options](gcc-options.md)
- [pkg-config options: --cflags, --libs](linux-pkg-config.md#options)

## Startup

build

```sh
make
```

run

```sh
./hello
```


