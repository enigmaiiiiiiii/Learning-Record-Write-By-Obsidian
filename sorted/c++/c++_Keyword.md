# 关键字

[explicit](c++_Keyword_explicit.md)

[static](c++_Keyword_static.md)

[using](c++_Using.md)

## nodiscard

- 表示函数的返回值不能不使用

```c++
[[nodiscard]] int func()
{
    int a = 0;
    return a;
}

func();  // 编译成功, 但警告
```