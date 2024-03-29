# C++ - Function Pointer 

[[c++_Class_Member_Function_Pointer]]

- 函数指针指向某种特定**类型**
  - 所以可以用作函数形参的类型声明
- **函数的类型**由**返回类型**和**形参类型**共同决定,与函数名无关
- 也就是说 函数指针 指向的函数  必须 与 声明的函数指针  有一致返回类型和形参
- 用指针替换函数名即可声明指向该函数的指针`bool (*pf)(const string &, const string &);`
  - pf 是一个未初始化的函数指针实例
  - `(*pf)`两端的括号必不可少,否则表示返回类型是bool指针
- 函数名作为值使用 并 赋值给一个变量时，这个变量的值就是这个函数指针
  - 可以将函数名赋值给函数指针
  - 可以是nullptr或0
- 函数指针可直接调用无需解引用
- 同函数的声明，函数指针的声明也可通过`typedef`,`decltype`简化

```c++
// 三种声明等价，funcp0, func1, funcp2声明为指向同类型函数的函数指针
bool (*funcp0)(const string&, const string&);
typedef bool (*funcp1)(const string&, const string&);
typedef decltype(funcp0) funcp2;
```

## 函数指针作为形参

- 函数类型(返回类型， 形参)做为形参会自动转换成函数的指针
  - 函数指针声明`bool (*pf)(const string &, const string &);
  - 函数形参:`bool (*pf)(const string &, const string &)`, pf为形参名称
- 例如：对于函数`bool lengthCompare(const string &, const string &) {...}`, `lengthCompare`可以作为函数的实参
