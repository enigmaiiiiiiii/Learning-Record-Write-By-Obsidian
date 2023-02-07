# 添加资源

如果启用了CMAKE_AUTORCC，将.qrc文件作为源添加到您的可执行文件或库中。引用的[资源](qt-resource-system.md)文件将被嵌入到二进制文件中:

```cmake
set(CMAKE_AUTORCC ON)
```

## 直接添加资源文件

```cmake
qt_add_resources(my_app "app_images"
    PREFIX "/"
    FILES
        images/copy.png
        images/cut.png
        images/new.png
        images/open.png
        images/paste.png
        images/save.png
)
```

## 添加.qrc文件

```cmake
qt_add_executable(my_app
    application.qrc
    main.cpp
)
```

在c++中使用

```c++
logoLabel->setPixmap([QPixmap](":/images/logo.png"));
```