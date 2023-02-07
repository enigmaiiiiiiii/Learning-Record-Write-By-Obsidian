# QFile

- QFile类提供了一个用于读/写文件的接口
- 继承自QFileDevice
- 是一个可以用来读/写文本文件、二 进制文件和Qt资源的I/O设备

> QFile可以单独使用，也可以和QTextStream或者QDataStream一起使用，这样会更方便。

- setFileName()设置文件名
- exists()来检查文件是否存在
- remove()删除一个文件
- open()打开，close()关闭，flush()刷新

文件的数据读/写

- 一般使用QDataStream或者QTextStream来完成
- 也可以使用继承自QIODevice类的一些函数
  - 比如read()、readLine()、readAll()和write(),
  - 一次只操作一个字符的getChar()、putChar()和ungetChar()等函数
- 可以使用size()函数来获取文件的大小
- seek()来定位到文件的任意位置，pos()来获取当前的位置, atEnd()来判断是否到达了文件的末尾。

## QFileInfo

```c++
QFileInfo info(QFileObject);
```

QFileInfo类提供了与系统无关的文件信息

- absoluteFilePath()： 绝对路径
- size(): 文件大小

> 包括文件的名称、在文件系统中的位置（路径）、文件的访问权限以及是否是一个目录或者符号链接等。QFileInfo也可以获取文件的大小和最近一次修改/读取的时间，还可以获取Qt资源的相关信息

## QTemporaryFile

- 临时文件对象 , 对象销毁时自动删除
