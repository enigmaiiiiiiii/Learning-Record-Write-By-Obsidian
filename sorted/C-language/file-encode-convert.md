# Effect of Character Encoding to File

## Character Operation

- character length: `sizeof` returns the number of bytes, for `TCHAR`, character length is `sizeof(szBuffer)/sizeof(TCHAR)`
- bits of characters: `sizeof(TCHAR) * <numberOfcharacters>`

## Unicode File Convertion

- When Convert Unicode file to UTF-16/32, a mark of [byte order](byte-order.md) will be added to the head of the file
  - UTF-16 uss `FEFF` to mark the file as [Big-Endian]()
  - UTF-32以00 00 FEFF标记文件为Big-Endian
  - UTF-8不需要标注字节序，但会在文件开头标记EF BB BF表示该文件是UTF-8
- 所以读取UTF-16/32文件是从第三（四）起才是正文,
  存储为UTF-16/32的文件要在头部加上标志符

- 判断计算机的字节序的一个方法:  `#define ISLE (unsigned char(0x00FF << 8)?FALSE:TRUE)`
- 转换字节: `#define REVERSE(x) (((x) & 0x00FF) << 8 | (((x) & 0xFF00) >> 8))`

## Read File not in Unicode

- 读硬盘文件到内存, 不需要类型转换函数
- 将文件写到内存需要转换类型

## printf, wprintf

> 表示占位符在printf和wprintf中期待的插入类型

- %s  SCBS MBCS, unicode
- %S  unicode, SCBS MBCS
- %hs SBCS MBCS, SBCS MBCS
- %ls Unicode, Unicode

## Value Of Characters

- ANSI应为字符的值不会大于256
- unicode字符的值可能大于256

## Localize

Function `char *setlocale(int catagory, const char* locale)`

- `catagory`: 
