# 成员函数指针

## 声明

- 用auto声明：`auto pmf = &Screen::get_cursor`
- 直接声明: `char (Screen::*pmf)(Screen::pos, Screen::pos)`, pmf是一个成员函数指针对象

## 使用成员函数指针

- 因为调用运算符的优先级高于访问运算符的优先级, 所以函数名括号必不可少

  ```c++
  Screen myScreen, *pScreen = &myScreen;
  char c1 = (pScreen->*pmf)();
  char c2 = (myScreen.*pmf)(0, 0);
  ```


## 使用[typedef, using](c++-handle-type.md)可以使成员函数指针可读性更高

```c++
using Action = char (Screen::*)(Screen::pos, Screen::pos);
typedef char (Screen::)(Screen::pos, Screen::pos) Action;
```