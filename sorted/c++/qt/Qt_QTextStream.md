# 文本流读写

QTextStream类

- 以文本的格式读写数据，而不是编码
- 可以读写单词，行，数字
- 对于生成文本，QTextStream对字段填充，对齐和数字个数提供了格式选择

提供的函数

- setDevice()或者setString()来设置QTextStream要操作的设备或者字符串
- seek()定位到一个指定位置，
- atEnd()判断是否还有可以读取的数据
- flush(): QTextStream会清空写缓冲中的所有数据，并且调用设备的flush()函数

编码

- QTextStream使用了一个基于Unicode的缓冲区
- QTextStream使用QTextCodec来自动支持不同的字符集
- QTextCodec::codecForLocale()返回的编码来进行读/写
- setCodec()函数来设置编码

读文件方式

- readLine()或者readAll()进行一块接着一块的读取
- 单词读取，单词有空格隔开, 支持流入到
  - QString
  - QByteArray
  - char*
- 读字符, QChar或char  
  - 通常用在解析文件
- 读数字时，  
  - QTextStream默认自动检测数字的基数
  - 如果数字以“0x”开头，则它将被假定为十六进制形式：
  - 如果以数字1~9开头, 那么它将被假定为十进制形式等。
  - setIntegerBase()来设置整数基数，停止自动检测。