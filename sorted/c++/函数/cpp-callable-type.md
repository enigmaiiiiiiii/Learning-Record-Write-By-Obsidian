#  C++ Callbale Type

[函数指针](c++_function_pointer.md)

[数据成员指针](cpp-data-member-pointer.md), 可以作为参数，尽管不发生调用

[lambda表达式](c++_lambda.md)

[重载调用运算符的类](cpp-overload-call-operator.md)

[标准库的function模板](cpp-std-function-template.md)

[标准库定义的可调用对象](cpp-std-define-callable-object.md)

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