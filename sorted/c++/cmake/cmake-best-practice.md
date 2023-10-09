# CMake - Best Practice

## What Will Do

- create a library and install
- create a program use the library and install

## Project Structure

```

```

## Install

```sh
make install
```



## CMake Uninstall

by default, cmake doesn't provide `make uninstall` target

option 1: use run this command under [build tree](cmake-glossary.md#build-tree) directory

```sh
xargs rm -f < install_manifest.txt
```

options 2: add custom target

[cmake add custom command]()


