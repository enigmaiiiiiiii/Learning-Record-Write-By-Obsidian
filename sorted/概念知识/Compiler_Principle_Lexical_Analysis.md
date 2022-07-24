# Lexical Analysis(词法分析)

code: 

```
if (i == j)
    z = 0;
else 
    z = 1;
```

lexical分析器看到的是：

`\tif (i == j)\n\t\tz = 0;\n\telse\n\t\tz = 1;`

## Token Class 

> 如： Identifier, Keywords, `()`

- 对应一组字符串
- Identifier: 以英文字母开头的字符串
- Integer :0, 12, 001
- Keyword: if, else, begin
- WhiteSpace
- Token: `<class, string>`

源文件中的字符串foo=42转换成Token: 
`<Id, "foo">, <OP, "=">, <Int, "42">


