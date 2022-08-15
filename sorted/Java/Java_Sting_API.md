# String API

构造函数

- String(): 创建一个空的String对象
- String(byte[] bytes, Charset charset): 用charset字符集解码bytes字节数组来构造String对象

连接字符串

- `s1.concat(s2)`: 字符串s1后接字符串s2

判断字符串相等

- `str1 == str2`: 只能判断两个字符串是否指向同一个对象, 而不判断内容是否相等
- `str1.equals(str2)`: 内容相同返回true, 不同返回false
- `str1.compareTo(s2)`: 按字典序返回大小, 内容相同返回0, str1小于str2返回负值

检查前缀和后缀

- startWith(prefix)
- endsWith(suffix)

子字符串

- `substring(b, e)`: 返回下标[b, e - 1]之间的值

下标

- `indexOf(ch)`
- `indexOf(ch, fromIndex)`
- `indexOf(s)`: 第一个字符串s出现的下标，不存在返回-1
- `indexOf(s, fromIndex)`
- `str.charAt(index)`: 返回字符串中index处的字符, $index \in [0, s.length() - 1]$

转换为字节数组

- `getBytes()`: 返回字符串的byte数组
- `getBytes(charsetName)`: 使用字符集charsetName, 返回字符串的byte数组

空字符处理

- trim(): 去除首尾[空白字符]

> 空白字符
>> Unicode编码小于等于0x20的字符
>> \t \n \r \f \b \s

\u0019
\u0018
\u0017
\u0016
\u0015
\u0014
