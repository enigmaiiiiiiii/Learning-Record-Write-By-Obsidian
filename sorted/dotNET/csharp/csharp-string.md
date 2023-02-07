# 字符和字符串

- 转移字符前加`\`

> 这意味着, 需要一个反斜线时需要两个反斜线，c\#引入@

- 在字面量前加@，表示不支持转义字符

`string a2 = @"\\server\fileshare\helloworld.cs";`, 不考虑反斜线转义作用

[特殊字符](csharp-special-characters.md)

## String.Split方法

- 按字符(char)或字符数组(char[])分割字符

return

- 返回字符串数组

参数

- separator: 一个字符或字符数组，用于分隔字符串
- count: 数组中期望的最大元素个数
- options:
  - 函数执行选项，StringSplitOptions类
  - 用于指定是否需要裁剪子字符串中的空字符串