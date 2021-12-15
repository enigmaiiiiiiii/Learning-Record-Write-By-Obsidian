# C++中的拷贝

- 函数声明：
  - 默认构造函数`Foo();`
  - 拷贝构造函数`Foo(const Foo&) {}`
  - 移动构造函数`Foo(Foo&&) {}`
  - 拷贝赋值运算符`Foo& operator= (const Foo&) {}`
  - 移动赋值运算符`Foo operator=(Foo &&rhs) noexcept`
  - 析构函数`~Foo() {}`

```c++
string dots(10, '.');  // 直接初始化
string s(dots);   // 直接初始化
string s2 = dots;  // 拷贝初始化 
```

[[拷贝构造函数]]

[[拷贝赋值运算符]]

[[析构函数]]

[[三五法则]]

[[显式=default]]

[[阻止拷贝]]

[[类的行为像值]]

[[类的行为像指针]]

[[动态内存管理]]

[[对象移动]]
