# CMake - Using Package

* [What Is Package In CMake](#what-is-package-in-cmake)
* [The key Command](#the-key-command)
* [This Command has 2 search modes](#this-command-has-2-search-modes)
* [Searched Files](#searched-files)
* [Search Path](#search-path)
* [Who provide those .cmake file](#who-provide-those-.cmake-file)
* [How To Use Package](#how-to-use-package)
* [Create Package](#create-package)

## What Is Package In CMake

- package in cmake is a concept like other programming language, provide a mechanism to import extra [command](cmake-glossary.md#command) and predefined [variable](cmake-glossary.md#variable)

> similar concept in program lanaguage [nodejs module](nodejs-module-system.md), [java import](), [python package](python-import.md)


## The key Command

- [command `find_package()`](cmake-command-find-package)

## when a package is found

- extra commands and variable will be add to cmake
- check [.cmake file](#.cmake-file) for new available commands and variable

## This Command has 2 search modes

- [Module mode](cmake-command-find-package.md#module-mode)
- [Config mode](cmake-command-find-package.md#config-mode)

## Searched Files

[module mode](cmake-command-find-package.md#module-mode)

- `Find<PackageName>.cmake`

[config mode](cmake-command-find-package.md#config-mode)

- `<PackageName>Config.cmake`
- `<lowercasepackagename>-config.cmake`
- `<PackageName>ConfigVersion.cmake`

## Search Path

module mode

- search path is determined by cmake

config mode

- ...

## Who provide those .cmake file

who provide `Find<PackageName>.cmake` file

- maybe operating system
- maybe CMake itself
- maybe project who called `find_package()`

who provide config mode .cmake file

- those files are [installed](c-library-file.md#install-a-shared-library-on-system) as a part of package

## How To Use Package

[Using pkg-config](cmake-using-pkg-config.md)


## .cmake file

## Create Package

- .cmake file
- install .cmake to 
