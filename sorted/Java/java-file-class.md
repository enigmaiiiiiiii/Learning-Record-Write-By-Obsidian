# java.io.File

> 获取目录/文件属性, 删除, 重命名, 读写数据 

- import java.io.File

## 创建File对象

> 只会创建File对象，若文件不存在，并不会创建文件

- File(String pathname)
- File(File parent, String child)
- File(String parent, String child)
- File(URI uri)

## 方法

- close(): 关闭资源
- exists(): 测试被抽象路径名表示的文件或目录是否存在
- length(): 返回抽象路径名表示的文件的长度

创建文件夹

- mkdir(): 创建单个文件夹
- mkdirs(): 创建抽象路径名表示的文件, 并创建所有必需但不存在的父目录

## java.nio.file.Files

> 由操作文件，目录的静态方法组成

- probeContentType()
  - 探测文件内容类型, 返回字符串的形式为MIME定义的内容类型
  - 文件类型无法确定, 返回null
