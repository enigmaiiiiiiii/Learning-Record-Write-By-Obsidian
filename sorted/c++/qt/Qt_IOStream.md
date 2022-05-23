# 输入输出

[相关内容](Linux_IO_Stream.md)

- QIODevice为Qt输入输出类的基础接口
- QIODevice是抽象类，无法被实例化

> 为QFile, QBuffer, QTcpSocket等支持读/写数据块设备提供抽象接口

打开模式

|常量|描述|
|--|--|
|QIODevice:NotOpen|设备没有打开|
|QIODevice:ReadOnly|设备以只读方式打开，这时无法写人|
|QIODevice:WriteOnly||
|QIODevice::ReadWrite||
|QIODevice::Append||
|QIODevice:Truncate||
|QIODevice:Text||
|QIODevice:Unbuffered||

QIODevice区别两种类型的设备：随机存取设备和顺序存储设备：

- 随机存取设备
  - 支持使用seek()函数来定位到任意的位置
  - 可以使用pos()函数来获取当前位置。
  - 比如QFile、QBuffer
- 顺序存储设备
  - 不支持定位到任意的位置，数据必须一次性读取。
  - pos()和size()等函数无法在操作顺序设备时使用，
  - 这样的设备有QTcpSocket、QProcess等。
- isSequential()判断设备类型  

