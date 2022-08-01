# IO

- 流使用完毕后，必须关闭流
- 低级流, 节点流: 实际连接程序与另一端的流，负责读写字节数据
- 高级流, 处理流: 用于简化读写操作, 不能独立存在, 必须建立在其他流上

[流的抽象理解](Java_Stream.md)

[File类](Java_File_Class.md)

## 字节流

- InputStream/OutPutStream: 基类

### 低级流

[FileInputStream/FileOutputStream](Java_FileIOStream.md)

### 高级流

[Buffer流](Java_BufferedIOStream.md): 通过缓冲减少IO次数的流

[Object流](Java_ObjectIOStream.md): 将对象序列化与反序列化的流

## 字符流

Reader/Writer: 基类

IOStreamWriter/IOStreamReader: **转换** 字节流为字符流

- 由字节流构建
- 构建的对象用于构建其他字符流
- 提供了块读写方法
- 本身不提供buffer实例变量

BufferedReader/BufferedWriter: **缓冲**的字符流

[PrintWriter/BufferedReader](Java_PrintWriter_BufferedReader.md): **行操作** 缓冲字符流
