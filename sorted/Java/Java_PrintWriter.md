# PrintWriter

自动行 **刷新缓冲** **字符** 输出流

- 若启用autoFlush
  - 只用在调用println(), printf(), format()方法才会进行冲洗
  - 而不是在输出换行符时进行冲洗
- 本身不带缓冲数组
- 不提供append模式

## 创建PrinterWriter对象

- 通过File类构建
  - 可以指定字符集
- 通过**OutputStream**构建: PrintWriter(OutputStream out, boolean autoFlush, Charset charset)
  - 允许指定字符集
  - 是否自动刷新
- 通过Writer构建
  - 可以指定自动刷新参数
- 通过文件路径构建
  - 可以指定字符集

## 向文件写入字符的方法

- println()
- print()

## Scanner

- Scanner类
- File类或文件名字符串可用作构造参数
- 包含各种类型的next方法
  - next()方法读取以空白字符结束的字符串, 包括`' ', '\t', '\f', '\r', '\n'`
  - nextline()读取整行