# CMake - Predefined Variables

## Distingush CMake Properties

- distingush from [cmake properties](cmake-property.md)

## Catalog

- `PROJECT_SOURCE_DIR` The root directory of the project.
- `PROJECT_BINARY_DIR` The directory where the `cmake` command is run, typically `${PROJECT_SOURCE_DIR}/build`.
- `CMAKE_INCLUDE_PATH` An environment variable (not a CMake variable).
- `CMAKE_LIBRARY_PATH` An environment variable.
- `CMAKE_CURRENT_SOURCE_DIR` The directory where the currently processed `CMakeLists.txt` is located.
- `CMAKE_CURRENT_BINARY_DIR` The target build directory. This value can be changed using `ADD_SUBDIRECTORY(src bin)`.
- `SET(EXECUTABLE_OUTPUT_PATH <new_path>)` does not affect this variable; it only changes the storage location of the final target executable files.
- `CMAKE_CURRENT_LIST_FILE` Outputs the full path of the `CMakeLists.txt` file where this variable is called.
- `CMAKE_CURRENT_LIST_LINE` Outputs the line where this variable is used.
- `CMAKE_MODULE_PATH` Defines the path where your custom CMake modules are located. Use `SET(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)` and then use the `INCLUDE` command to include your own modules.
- `EXECUTABLE_OUTPUT_PATH` Redefines the location for storing target binary executable files.
- `LIBRARY_OUTPUT_PATH` Redefines the location for storing target library files.
- `PROJECT_NAME` Returns the name of the project defined in the most recent call to [PROJECT()](cmake-build-project.md).
- `CMAKE_ALLOW_LOOSE_LOOP_CONSTRUCTS` Used to control the syntax of `IF` and `ELSE` statements.

## System Infomation

- `CMAKE_MAJOR_VERSION` CMake's major version number, e.g., 2 in 2.8.6.
- `CMAKE_MINOR_VERSION` CMake's minor version number, e.g., 8 in 2.8.6.
- `CMAKE_PATCH_VERSION` CMake's patch level, e.g., 6 in 2.8.6.
- `CMAKE_SYSTEM` The system name, for example, Linux-2.6.22.
- `CAMKE_SYSTEM_NAME` The system name without the version, e.g., Linux.
- `CMAKE_SYSTEM_VERSION` The system version, e.g., 2.6.22.
- `CMAKE_SYSTEM_PROCESSOR` The processor name, e.g., i686. UNIX is TRUE for all UNIX-like platforms, including OS X and Cygwin. WIN32 is TRUE for all Win32 platforms, including Cygwin.

## Multi Thread

- `THREADS_FOUND` 表示是否找到支持的线程库
- `CMAKE_THREAD_LIBS_INIT` 使用的线程库
- `CMAKE_USE_WIN32_THREADS_INIT` WIN32线程库
- `CMAKE_USE_PTHREADS_INIT`
- `CMAKE_HP_PTHREADS_INIT`

## Config Build Options

- `BUILD_SHARED_LIBS` 控制默认的库编译方式。如果未进行设置,使用`ADD_LIBRARY`时又没有指定库类型,默认编译生成的库都是静态库 （可在t3中稍加修改进行验证）
- `BUILD_USE_64BITS` 编译64位文件,  默认off
- `CMAKE_C_FLAGS` 设置C编译选项
- `CMAKE_CXX_FLAGS` 设置C++编译选项

## Environment

### Build Control

- `CMAKE_APPLE_SILICON_PROCESSOR`
- `CMAKE_BUILD_PARALLEL_LEVEL`
- `CMAKE_BUILD_TYPE`
- `CMAKE_CONFIGURATION_TYPES`
- `CMAKE_CONFIG_TYPE`
- `CMAKE_EXPORT_COMPILE_COMMANDS`
- `CMAKE_GENERATOR`
- `CMAKE_GENERATOR_INSTANCE`
- `CMAKE_GENERATOR_PLATFORM`
- `CMAKE_GENERATOR_TOOLSET`
- `CMAKE_INSTALL_MODE`
- `CMAKE_<LANG>_COMPILER_LAUNCHER`
- `CMAKE_<LANG>_LINKER_LAUNCHER`
- `CMAKE_MSVCIDE_RUN_PATH`
- `CMAKE_NO_VERBOSE`
- `CMAKE_OSX_ARCHITECTURES`
- `CMAKE_TOOLCHAIN_FILE`
- `DESTDIR`
- `LDFLAGS`
- `MACOSX_DEPLOYMENT_TARGET`
- `<PackageName>_ROOT`
- `VERBOSE`

###  for languages

- `ASM<DIALECT>`
- `ASM<DIALECT>FLAGS`
- `CC`
- `CFLAGS`
- `CSFLAGS`
- `CUDAARCHS`
- `CUDACXX`
- `CUDAFLAGS`
- `CUDAHOSTCXX`
- `CXX`
- `CXXFLAGS`
- `FC`
- `FFLAGS`
- `HIPCXX`
- `HIPFLAGS`
- `ISPC`
- `ISPCFLAGS`
- `OBJC`
- `OBJCXX`
- `RC`
- `RCFLAGS`
- `SWIFTC`
