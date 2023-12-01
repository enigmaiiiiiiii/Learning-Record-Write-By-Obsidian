# Java Command Line Tools - Argument File Of Command Java

## What It Is

- 通过指定参数文件来简化java命令，
- 使用@符号前缀来标识包含java选项和类名的参数文件
- 遇到--disable-@files选项时, 停止展开参数文件
  - 可以在命令行的任何地方使用--disable-@files选项
  - 包括在参数文件中，以停止@参数文件的扩展。

## 参数文件语法

- 参数文件必须只包含ASCII字符或系统默认编码中ASCII友好的字符，如UTF-8。
- 大小不能超过2147483647字节
- 空白字符包含一个空字符 `\t, \n, \r, and \f`

> 比如`c:\Program Files`, 可以指定为`"c:\\Program Files"` 或 `c:\Program" "Files`

- 包含空格的文件名用双引号括起来
- 参数文件中的文件名相对于当前目录的，不是参数文件的位置
- 使用`#`注释
- 使用行尾`\`连接两行，`\`前的空格被修剪;
- 在第一列放置一个`\`, 防止`\`前的空白被修建
- 不允许使用通配符`*`

## Example

参数文件

```
-cp "lib/
cool/
app/
jars
```

解释为:

```
-cp lib/cool/app/jars
```

为了输出:

```shell
-cp c:\Program Files(x86)\Java\jre\lib\ext;c:\Program Files\Java\jre9\lib\ext
```

参数文件写作: 

```
-cp "c:\\Program Files (x86)\\Java\\jre\\lib\\ext;c:\\Program Files\\Java\\jre9\\lib\\ext"
```



