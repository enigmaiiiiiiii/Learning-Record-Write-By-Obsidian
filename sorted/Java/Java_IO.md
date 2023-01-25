# IO

- [feature](#feature)
- [Practical Use](#practical-use)
- [File IO](#file-io)
- [字节流](#字节流)
- [字符流](#字符流)
- [IO Class Hierarchy](#io-class-hierarchy)

## feature

- 流使用完毕后，必须关闭流
- 低级流(节点流): 实际连接程序与另一端的流，负责读写字节数据
- 高级流(处理流): 用于简化读写操作, 不能独立存在, 必须建立在其他流上

[流的抽象理解](Java_Stream.md)

## Practical Use

## File IO

interact with file in java

[File类](Java_File_Class.md)

File Byte IO Stream

[FileInputStream/FileOutputStream](Java_FileIOStream.md)

## 字节流

基类

- [InputStream/OutPutStream](Java_IOStream.md)

低级流

- [FileInputStream/FileOutputStream](Java_FileIOStream.md)
- [ByteArrayInputStream/ByteArrayOutputStream](Java_ByteArrayIOStream.md)

高级流

- [Buffer Stream](Java_BufferedIOStream.md): [通过缓冲减少IO次数]的流
- [Object Stream](Java_ObjectIOStream.md): 将对象序列化与反序列化的流
- [Data Stream](Java_DataIOStream.md): 读写[基本数据类型](Java_Primitives_Type.md)的流

## 字符流

基类: [Reader/Writer]

**转换** 字节流为字符流

[InputStreamReader/OutputStreamWriter](Java_IO_Byte_To_Charcter.md)

**缓冲**的字符流

[BufferedReader/BufferedWriter](Java_IO_Buffer_Character.md)

支持**行操作** 的字符输出流

[PrintWriter](Java_PrintWriter.md)

## Why Buffer IO faster than unbuffered IO

- 硬盘访问不是按字节访问, 是按块访问
- 所以, 如果write 1 byte, taken time is 1, 并不能得出write x bytes, taken time is x

## IO Class Hierarchy

- `java.io.Console (implements java.io.Flushable)`
- `java.io.File (implements java.lang.Comparable<T>, java.io.Serializable)`
- java.io.FileDescriptor
- java.io.InputStream (implements java.io.Closeable)
  - java.io.ByteArrayInputStream
  - java.io.FileInputStream
  - java.io.FilterInputStream
    - java.io.BufferedInputStream
    - java.io.DataInputStream (implements java.io.DataInput)
    - java.io.LineNumberInputStream
    - java.io.PushbackInputStream
  - java.io.ObjectInputStream (implements java.io.ObjectInput, java.io.ObjectStreamConstants)
  - java.io.PipedInputStream
  - java.io.SequenceInputStream
  - java.io.StringBufferInputStream
- java.io.ObjectInputStream.GetField
- java.io.ObjectOutputStream.PutField
- java.io.ObjectStreamClass (implements java.io.Serializable)
- java.io.ObjectStreamField (implements java.lang.Comparable<T>)
- java.io.OutputStream (implements java.io.Closeable, java.io.Flushable)
  - java.io.ByteArrayOutputStream
  - java.io.FileOutputStream
  - java.io.FilterOutputStream
    - java.io.BufferedOutputStream
    - java.io.DataOutputStream (implements java.io.DataOutput)
    - java.io.PrintStream (implements java.lang.Appendable, java.io.Closeable)
  - java.io.ObjectOutputStream (implements java.io.ObjectOutput, java.io.ObjectStreamConstants)
  - java.io.PipedOutputStream
- java.security.Permission (implements java.security.Guard, java.io.Serializable)
  - java.security.BasicPermission (implements java.io.Serializable)
    - java.io.SerializablePermission
  - java.io.FilePermission (implements java.io.Serializable)
- java.io.RandomAccessFile (implements java.io.Closeable, java.io.DataInput, java.io.DataOutput)
- java.io.Reader (implements java.io.Closeable, java.lang.Readable)
  - java.io.BufferedReader
    - java.io.LineNumberReader
  - java.io.CharArrayReader
  - java.io.FilterReader
    - java.io.PushbackReader
  - java.io.InputStreamReader
    - java.io.FileReader
  - java.io.PipedReader
  - java.io.StringReader
- java.io.Writer (implements java.lang.Appendable, java.io.Closeable, java.io.Flushable)
  - java.io.BufferedWriter
  - java.io.CharArrayWriter
  - java.io.FilterWriter
  - java.io.OutputStreamWriter
    - java.io.FileWriter
  - java.io.PipedWriter
  - java.io.PrintWriter
  - java.io.StringWriter