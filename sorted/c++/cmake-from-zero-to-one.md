# CMake - 0 to 1

## CMakeLists.txt

for `main.cpp`

```c++
CMAKE_MINIMUM_REQUIRED(VERSION 3.15)

PROJECT(app)

add_executable(app main.cpp) 
```

## Generate Build System Directory

```sh
cmake -S . -B build
```

- this command will use `CMakeLists.txt` in current directory to generate build system, and put it in `build` directory

## Generate Executable File or Library File

```sh
cmake --build <dir>
```

- `dir`: build directory

set executable file output directory


```cmake
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin")
```

- this command will put executable file at `cmakelist_file_dir/bin`
- `CMAKE_BINARY_DIR`: CMake [Build System](cmake-glossary.md#build-system) directory, for command `cmake -S . -B build`, `CMAKE_BINARY_DIR` is `build`

