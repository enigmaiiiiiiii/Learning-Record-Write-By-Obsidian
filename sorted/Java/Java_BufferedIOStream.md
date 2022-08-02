# 缓冲流: BufferInputStream/BufferOutputStream 

- 扩展自FilterInputStream/FilterOutputStream
- 创建时会创建一个内部的缓冲区数组(byte[] buf)
- 通过减少IO次数提高效率

***

- 创建BufferInputStream/BufferOutputStream对象
  - `BufferedInputStream(InputStream in)`: 将in流转为缓冲流
  - `BufferedInputStream(InputStream in, int size)`: 将in流转为缓冲流, 缓冲区大小设置为size

## 字段

input

- buf: 存储数据的内部缓冲区数组
- count: 缓冲区有效字节索引+1
  - 范围[0, buf.length]
- pos: 缓冲区中的当前位置, 从buf数组中读取的下一个字符的索引
  - 范围[0, count]
- markpos: 调用最后一个mark()方法时pos字段的值
  - 范围[-1, pos]
- marklimit:

output

- buf: 存储数据的内部缓冲区数组
- count: 缓冲区有效字节索引+1
  - 范围[0, buf.length]

## 方法

output

- flush()将缓冲区的内容

input

- read()读取一个字节
  - 返回读取的字节, 如果读取到文件末尾, 返回-1
  - 调用read()时从缓冲区(byte[] buf)获得数据