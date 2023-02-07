# 资源系统

- 程序需要的文件，如图像，文本

[资源编译器rcc](sorted/c++/qt/qt-resource-compliler.md)

[资源集合文件.qrc](qt-resource-collection-file.md)

## 引入外部.rcc文件

1. 将一个.qrc文件编译为外部.rcc

```shell
rcc -binary myresource.qrc -o myresource.rcc
```

2. 在应用程序中添加代码

```c++
[QResource]::registerResource("/path/to/myresource.rcc");
```

使用cmake可以完成以上工作

```cmake
qt_add_binary_resources(resources application.qrc DESTINATION application.rcc)
add_dependencies(my_app resources)
```
 
## 压缩 Compression