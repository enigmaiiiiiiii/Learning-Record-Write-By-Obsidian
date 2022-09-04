# ByteArrayInputStream/ByteArrayOutputStream

## ByteArrayOutputStream

- 数据被写入**自动增长**的缓冲数组

创建对象

- `ByteArrayOutputStream()`
- `ByteArrayOutputStream(int size)`

提取buffer中的数据

- `byte[] toByteArray()`: 复制流buffer中的数据到一个byte数组
- `String toString()`: 使用默认字符集将缓冲区的内容转换为解码字节的字符串

## ByteArrayInputStream



