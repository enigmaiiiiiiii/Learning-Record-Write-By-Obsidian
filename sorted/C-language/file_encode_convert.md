# 字符编码方式对文件的影响

## 字符运算

- 字符长度: sizeof得到的是字节数，对于TCHAR,字符长度为`sizeof(szBuffer)/sizeof(TCHAR)`
- 字节长度：可以用 字符数 $\times$ sizeof(TCHAR)

## Unicode文件转换

- 从Unicode文件转换为UTF-16/32时会在头部添加一个标记[字节序](字节序.md)的符号
  - UTF-16以FEFF标记文件为Big-Endian
  - UTF-32以00 00 FEFF标记文件为Big-Endian
  - UTF-8不需要标注字节序，但会在文件开头标记EF BB BF表示该文件是UTF-8
- 所以读取UTF-16/32文件是从第三（四）起才是正文,
  存储为UTF-16/32的文件要在头部加上标志符

- 判断计算机的字节序的一个方法:  `#define ISLE (unsigned char(0x00FF << 8)?FALSE:TRUE)`
- 转换字节: `#define REVERSE(x) (((x) & 0x00FF) << 8 | (((x) & 0xFF00) >> 8))`

## 非Unicode文件读取

- 读硬盘文件到内存, 不需要类型转换函数
- 将文件写到内存需要转换类型

## printf, wprintf

> 表示占位符在printf和wprintf中期待的插入类型

- %s  SCBS MBCS, unicode
- %S  unicode, SCBS MBCS
- %hs SBCS MBCS, SBCS MBCS
- %ls Unicode, Unicode

## 字符的值

- ANSI应为字符的值不会大于256
- unicode字符的值可能大于256

## 区域化

- 函数`char *setlocale(int catagory, const char* locale)`
  - catagory: 地区参数