#  可调用类型
 
 [[函数指针]]
 
 [[成员数据指针]], 可以作为参数，尽管不发生调用
 
[[lambda表达式]]

[重载调用运算符的类](重载函数调用运算符.md)

[[标准库function类模板]]

[[标准库定义的可调用对象]]

- 包含各种可调用对象的map

```c++
map<string, function<int(int, int)>>binops = {
  {"+", add},                                  // 函数指针
  {"-", std::minus<int>()},                    // 标准库函数对象
  {"/", divide()},                             // 用户定义的函数对象
  {"*", [](int i, int j) {return i * j;}},     // 未命名lambda对象
  {"%", mod}                                   // 命名lambda
};
```

## 相关标准库

[std::result_of](std_result_of模板.md)

[std::bind](标准库bind函数.md)