# IO

- 流使用完毕后，必须关闭流
- 低级流, 节点流: 实际连接程序与另一端的流，负责读写字节数据
- 高级流, 处理流: 用于简化读写操作, 不能独立存在, 必须建立在其他流上

[File类](Java_File_Class.md)

## 字节流

[InputStream/OutPutStream]: 基类

[FileInputStream/FileOutputStream](Java_FileIOStream.md)

[Buffer流](Java_BufferedIOStream.md): 通过缓冲减少IO次数的流

[Object流](Java_ObjectIOStream.md): 将对象序列化与反序列化的流

## 字符流
