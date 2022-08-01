# PrintWriter/BufferedReader

- 缓冲空间默认8k

## PrintWriter

- 提供了向文件写入字符的方法
  - println()
  - print()
- 不提供append模式
- 创建PrinterWriter对象
  - 通过File类构建
  - 通过**OutputStream**构建: 字节通过默认字符集转换字符
  - 通过Writer构建:
  - 通过文件路径构建
- File类或文件名字符串可用作构造参数

## BufferedReader

- 提供了从文件读取字符的方法
  - read()
  - readLine()
- 创建BufferedReader对象
  - 通过Reader构建

## Scanner

- Scanner类
- File类或文件名字符串可用作构造参数
- 包含各种类型的next方法
  - next()方法读取以空白字符结束的字符串, 包括`' ', '\t', '\f', '\r', '\n'`
  - nextline()读取整行