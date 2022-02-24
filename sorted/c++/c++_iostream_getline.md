# getline函数

> 读取一整行输入

```c++
istream& getline (istream& is, string& str, char delim);
istream& getline (istream& is, string& str);
```

- 将输入流中的读入内容直到遇到换行符或delim字符，将读入的内容存入str中 

- 遇到换行符`'\n'`, 读取结束并返回结果 
- 遇到delim字符，丢弃delim字符并返回, 下一次读入操作从下一个字符开始

- 接收两个参数
  - 一个输入流
  - 一个string对象
  
- 返回结果同[is](c++_iostream_条件状态.md), 可用作判断条件