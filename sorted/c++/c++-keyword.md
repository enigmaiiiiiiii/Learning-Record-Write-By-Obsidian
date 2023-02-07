# 关键字

[explicit](c++-keyword-explicit.md)

[static](c++-keyword-static.md)

[using](c++-using.md)

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