# IO

- [feature](#feature)
- [Practical Use](#practical-use)
- [File IO](#file-io)
- [字节流](#字节流)
- [Reader/Writer](#readerwriter)
- [Why Buffer IO faster than unbuffered IO](#why-buffer-io-faster-than-unbuffered-io)
- [IO Class Hierarchy](#io-class-hierarchy)

## feature

- **必须关闭流**
- 低级流(节点流): 实际连接程序与另一端的流，负责读写字节数据
- 高级流(处理流): 用于简化读写操作, 不能独立存在, 必须建立在其他流上

[流的抽象理解](java-stream.md)

## Practical Use

## File IO

interact with file in java

[File类](java-file-class.md)

File Byte IO Stream

[FileInputStream/FileOutputStream](java-fileiostream.md)

## 字节流

基类

- [InputStream/OutPutStream](java-iostream.md)

低级流

- [FileInputStream/FileOutputStream](java-fileiostream.md)
- [ByteArrayInputStream/ByteArrayOutputStream](java-bytearrayiostream.md)

高级流

- [Buffer Stream](java-bufferediostream.md): [通过缓冲减少IO次数]的流
- [Object Stream](java-objectiostream.md): 将对象序列化与反序列化的流
- [Data Stream](java-dataiostream.md): 读写[基本数据类型](java-primitives-type.md)的流

## Reader/Writer

抽象基类

[Reader/Writer](java-io-character-stream.md)

> write to a stream need close() flush the buffer

**转换** 字节流为字符流

[InputStreamReader/OutputStreamWriter](java-io-byte-to-charcter.md)

**缓冲**的字符流

[BufferedReader/BufferedWriter](java-io-buffer-character.md)

支持**行操作** 的字符输出流

[PrintWriter](java-printwriter.md)

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