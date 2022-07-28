# IO Stream

## FileOutputStream

- 用于向文件写入原始字节(8bit)流

***

- 创建FileOutputStream对象, 
  - `new FileOutputStream(file)`: 清空内容, 从头写入
  - `new FileOutputStream(file, true)`: 从文件末尾开始写入

***

- `public void write()`: 向文件写入原始字节(8bit)流, 如图像数据
- `public void write(byte[] b)`:
  - 向文件写入b.length个字节

> write(byte[] b)可以用于减少IO次数, 提高读写效率

## FileInputStream

- 用于从文件读取原始字节流
- public int read(): 从文件读取一个字节
  - 如果文件已经读取完毕，则返回-1
  > 返回-1，不是读取读到-1， 而是读取到EOF
  - 返回转为int的byte

读到byte数组

- public int read(byte[] b): 读最多b.length字节的数据到字节数组。
  - 这个方法会一直阻塞，直到有输入可用为止
  - 返回读取的字节数
  - 没有可读数据，则返回-1
- public int read(byte[] b, int off, int len): 从`b[off]`, 读最多len字节的数据到字节数组。
  - 这个方法会一直阻塞，直到有输入可用为止
  - 返回读取的字节数
  - 没有可读数据，则返回-1