# C++ Data Member Pointer

- 数据成员指针声明: `const string Screen::*pdata`,
  - pdata声明为指向 类Screen 中数据成员的指针,该数据成员类型为string
- 数据成员指针初始化`pdata = &Screen::m`, m为string成员类型
- 初始化后指向一个成员而非该成员的对象
- 数据成员的指针可以用作[[成员访问运算符]]的右侧操作数
  - `Screen.*pdata`
  - `pScreen->*pdata`
- 数据成员通常是private,想要获得数据成员指针，可以定义一个函数，返回数据成员指针  
- 一个非虚基类的数据成员指针，可以隐式转换成指向派生类的同一数据成员的指针
```c++
struct Base { int m; };
struct Derived : Base {};
 
int main()
{
    int Base::*bp = &Base::m;
    int Derived::*dp = bp;
    Derived d;
    d.m = 1;
    std::cout << d.*dp << ' ' << d.*bp << '\n'; // 打印 1 1
}
```
- 由派生类向基类转换，需要static_cast和显示转换来进行

```c++
struct Base {};
struct Derived : Base { int m; };
 
int main()
{
    int Derived::* dp = &Derived::m;
    int Base::* bp = static_cast<int Base::*>(dp);
 
    Derived d;
    d.m = 7;
    std::cout << d.*bp << '\n'; // OK：打印 7
 
    Base b;
    std::cout << b.*bp << '\n'; // 未定义行为
}
```

