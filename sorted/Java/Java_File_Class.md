# file类

> 获取目录/文件属性, 删除, 重命名, 读写数据 

- import java.io.File
- 创建文件`File file = new File("newFile.txt") `

## 写入数据

- PrintWriter类
- File类或文件名字符串可用作构造参数

## 读取数据

- Scanner类
- File类或文件名字符串可用作构造参数
- 包含各种类型的next方法
  - next()方法读取以空白字符结束的字符串, 包括`' ', '\t', '\f', '\r', '\n'`
  - nextline()读取整行

## close()方法

## try-with-resources