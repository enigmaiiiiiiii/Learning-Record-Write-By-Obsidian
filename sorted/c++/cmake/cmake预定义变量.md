# cmake预定义变量

> 区别于properties(属性)  [[cmake属性]]

## 目录

- `PROJECT_SOURCE_DIR` 工程的根目录
- `PROJECT_BINARY_DIR` 运行cmake命令的目录,通常是${PROJECT_SOURCE_DIR}/build
- `CMAKE_INCLUDE_PATH` 环境变量,非cmake变量
- `CMAKE_LIBRARY_PATH` 环境变量
- `CMAKE_CURRENT_SOURCE_DIR` 当前处理的CMakeLists.txt所在的路径
- `CMAKE_CURRENT_BINARY_DIR` target编译目录, 使用`ADD_SURDIRECTORY(src bin)`可以更改此变量的值
- `SET(EXECUTABLE_OUTPUT_PATH &lt;新路径>)`并不会对此变量有影响,只是改变了最终目标文件的存储路径
- `CMAKE_CURRENT_LIST_FILE` 输出调用这个变量的CMakeLists.txt的完整路径
- `CMAKE_CURRENT_LIST_LINE` 输出这个变量所在的行
- `CMAKE_MODULE_PATH` 定义自己的cmake模块所在的路径 
   `SET(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)`,然后可以用INCLUDE命令来调用自己的模块
- `EXECUTABLE_OUTPUT_PATH` 重新定义目标二进制可执行文件的存放位置
- `LIBRARY_OUTPUT_PATH` 重新定义目标链接库文件的存放位置
- `PROJECT_NAME` 返回通过[PROJECT()](cmake构建项目.md#^cmakeproject)最近一次调用定义的项目名称
- `CMAKE_ALLOW_LOOSE_LOOP_CONSTRUCTS` 用来控制IF ELSE语句的书写方式

## 系统信息

- `CMAKE_MAJOR_VERSION` cmake主版本号,如2.8.6中的2
- `CMAKE_MINOR_VERSION` cmake次版本号,如2.8.6中的8
- `CMAKE_PATCH_VERSION` cmake补丁等级,如2.8.6中的6
- `CMAKE_SYSTEM` 系统名称,例如Linux-2.6.22
- `CAMKE_SYSTEM_NAME` 不包含版本的系统名,如Linux
- `CMAKE_SYSTEM_VERSION` 系统版本,如2.6.22
- `CMAKE_SYSTEM_PROCESSOR` 处理器名称,如i686, UNIX 在所有的类UNIX平台为TRUE,包括OS X和cygwin, WIN32 在所有的win32平台为TRUE,包括cygwin

## 多线程

- `THREADS_FOUND` 表示是否找到支持的线程库
- `CMAKE_THREAD_LIBS_INIT` 使用的线程库
- `CMAKE_USE_WIN32_THREADS_INIT` WIN32线程库
- `CMAKE_USE_PTHREADS_INIT`
- `CMAKE_HP_PTHREADS_INIT`

## 设置选项(通过改变变量的值设置cmake)

- `BUILD_SHARED_LIBS` 控制默认的库编译方式。如果未进行设置,使用ADD_LIBRARY时又没有指定库类型,默认编译生成的库都是静态库 （可在t3中稍加修改进行验证）
- `BUILD_USE_64BITS` 编译64位文件,  默认off
- `CMAKE_C_FLAGS` 设置C编译选项
- `CMAKE_CXX_FLAGS` 设置C++编译选项

## 环境变量

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