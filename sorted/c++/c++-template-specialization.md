# 特例化

- 模板能做到到多数类型是适用的, 对特定类型并总是不合适
- 本质上是一个模板的实例，而非函数重载

为原模版的每个模板参数都提供实参

```c++
template<>
int compare(const char* const &p1, const char* const &p2)
{
    return strcmp(p1, p2);
}
```

> 本质上接管了编译器的工作