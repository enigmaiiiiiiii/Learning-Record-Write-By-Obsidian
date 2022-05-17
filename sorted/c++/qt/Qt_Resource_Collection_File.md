# 资源集合文件

- .qrc文件是一个XML文档，列举了本地资源文件

```xml
<RCC>
    <qresource prefix="/">
        <file>images/copy.png</file>
        <file>images/cut.png</file>
        <file>images/new.png</file>
        <file>images/open.png</file>
        <file>images/paste.png</file>
        <file>images/save.png</file>
    </qresource>
</RCC>
```

作为rcc的输入

- `<file>`标签
  - 标签中的内容为应用程序中一个文件的路径
  - 通过向file标签添加属性, 可以设置文件的别名, 语言等
- 使用rcc(资源编译器)对资源文件的处理通常在构建应用程序时完成
- [CMake](Qt_CMake_Add_Resource.md)和qmake, 支持rcc

## 嵌入大文件

CMake

```cmake
qt_add_big_resources(SOURCES application.qrc)
target_sources(my_app Private ${SOURCES})
```