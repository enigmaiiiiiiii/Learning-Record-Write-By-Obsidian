# 三五法则

- 三个基本操作可以控制类的拷贝操作
  - [[拷贝构造函数]]
  - [[拷贝赋值运算符]]
  - [[析构函数]]
- 需要析构函数的类也需要拷贝和赋值操作
- 需要拷贝操作的类也需要赋值操作，反之亦然

```c++
class HasPtr { /// 一个含有指针成员的类
public:
    HasPtr(const std==string& s = std==string()) : ps(new std::string(s)), i(0) {}
    /// 没有定义拷贝构造函数将合成拷贝构造函数
private:
    std::string* ps;
    int i;
};
HasPtr f(HasPtr hp)
{
    HasPtr ret = hp;  /// 拷贝hp
    return ret;  /// ret和hp被销毁
    /// 将导致指针成员被销毁两次
}
```
