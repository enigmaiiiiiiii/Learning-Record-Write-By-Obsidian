# 文件系统

[输入输出](qt-iostream.md)

[文件操作](qt-file.md)

[文本流读写](qt-qtextstream.md)

[数据流读写](qt-qdatastream.md)

## QSettings

- 提供了持久的、与平台无关的应用程序设置, 比如窗口大小和位置等

在Windows上一般被存储在系统注册表中
在Mac OS X上存储在XML偏好文件中
在Unix系统中，大多数应用 程序使用INI文本文件

QSettings是一个抽象，使用一种可移植的方式来保存和恢复应用程序的设置。
支持自定义存储类型
QSettings的API是基于QVariant的，可以用来保存大多数的基于值的类型，如QString、QRect和QImage等。

## QUrl

QUrlQuery用来插叙URL中的键值对

