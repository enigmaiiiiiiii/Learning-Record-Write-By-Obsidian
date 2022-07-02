# cmake命令行

## 简介

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

## 生成项目构建目录

- 用CMake构建一个项目，先要生成一个构建系统
- build目录作为构建树
- `-B`: 指定path to  build
- 通常放在单独文件夹

在当前目录作为构建树(build目录) 

```shell
mkdir build # 创建build
cd build  # 进入
cmake ../src  # 在build文件中构建
```

***

用已生成的构建树(build目录)

```shell
cd build
cmake .
```

- build是由之前的cmake命令生成的

***

指定构建树(build目录), 指定构建源目录

```shell
cmake -S src -B build
```

- src 必须包含CMakeLists.txt

## 生成可执行文件或链接库

```shell
cmake --build <dir>             [<options>] [--build-tool]
cmake --build --preset <preset> [<options>] [--build-tool]
```

dir: 构建系统所在目录

## install project

```shell
cmake --install <dir> [<options>]
```


