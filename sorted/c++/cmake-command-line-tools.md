# CMake - Command Line Interface

## Take A Look

build project

```shell
cmake --build <dir> [<options>] [-- <build-tool-options>]
```

Install project

```shell
cmake --install <dir> [<options>]
```

```shell
cmake --open <dir>
```

## Generate Build System

use current directory as build system, for example current path is `./build`

```sh
cmake ../src
```

specify build system directory and specify source directory

```sh
cmake -S src -B build
```

- `src` must have CMakeLists.txt

## generate executable file

```shell
cmake --build <dir>             [<options>] [--build-tool]
cmake --build --preset <preset> [<options>] [--build-tool]
```

## generate library

## install project

```shell
cmake --install <dir> [<options>]
```


