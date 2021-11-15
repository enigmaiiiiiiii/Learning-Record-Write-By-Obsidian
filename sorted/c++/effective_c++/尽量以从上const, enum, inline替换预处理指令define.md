# 尽量以从上const, enum, inline替换\#define

- 可以理解为尽量以编译器替换预处理器
- 对于常量，最好以const对象或enums替换\#define
- 对于类函数的宏， 最好改用inline函数替换\#define


## 定义常量时替换\#define的两种情况

- 定义const指针  [[const限定符#const指针]]
- 定义类内部专属常量

## 用\#define实现的macros

- 使用类函数的macro, 可以避免函数调用带来的开销
- 难以理解的麻烦

```c++
#define CALL_WITH_MAX(a, b) f((a) > (b)) ? (a) : (b))

int a = 5, b = 0;
CALL_WITH_MAX(++a, b);     // a被累加两次
CALL_WITH_MAX(++a, b+1-);  // a被累加一次
```

- 为了避免麻烦同时获得宏带来的效率，可以使用template inline函数