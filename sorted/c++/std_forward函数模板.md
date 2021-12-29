# std::forward

```c++
// lvalue 
template <class T> T&& forward (typename remove_reference<T>::type& arg) noexcept;
// rvalue
template <class T> T&& forward (typename remove_reference<T>::type&& arg) noexcept;
```

- 如果arg不是左值，返回arg的[右值]()引用
- 如果arg是左值，函数不会改变它的类型
- 需要这个函数的原因： 所有命名值总是被认为是[左值](),即使被声明为右值引用的值，这将造成参数转发(将形参数传递给内部调用函数作为实参)给其他函数的模板函数保留潜在语义带来困难

```c++
// forward example
#include <utility>      // std::forward
#include <iostream>     // std::cout

// function with lvalue and rvalue reference overloads:
void overloaded (const int& x) {std::cout << "[lvalue]";}
void overloaded (int&& x) {std::cout << "[rvalue]";}

// function template taking rvalue reference to deduced type:
template <class T> void fn (T&& x) {
  ///  如果不用std::forward转发x,x会被当做左值传递给overload参数
  overloaded (x);                   // always an lvalue
  overloaded (std::forward<T>(x));  // rvalue if argument is rvalue
  
}

int main () {
  int a;

  std::cout << "calling fn with lvalue: ";
  fn (a);
  std::cout << '\n';

  std::cout << "calling fn with rvalue: ";
  fn (0);
  std::cout << '\n';

  return 0;
}

```
