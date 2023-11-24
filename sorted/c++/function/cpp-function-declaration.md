# Cpp - Function Declaration

- 返回**类型，函数名，形参类型**描述了函数接口
- 预处理的时候会处理函数声明？函数声明发生在链接文件之前?
- 函数声明中，形参名称不是必须的
- 建议在**头文件**中声明，在**源文件**中定义
- 声明但不定义是合法的
- 使用typedef和decltype可以简化声明

[typedef](c++-handle-type.md#typedef)

[decltype](c++-handle-type.md#decltype)

```c++
// func0, func1, func2为相同函数类型
bool func0(const string&, const string&);
typedef bool func1(const string&, const string&);
typedef decltype(func1) func2;
```
