# decltype

- 类型推导符
- 为泛型编程设计，主要解决有些类型有模板参数决定而难以表示的问题
- decltype分析**变量**类型,**表达式**计算类型,**函数**返回的数据类型，声明或定义变量类型为**相应**数据类型

```c++
decltype(func()) x = a; 
// decltype的作用是分析func函数的返回值类型，将x声明或定义为此类型对象
```

- decltype不会忽略顶层const和引用操作

```c++
cosnt int ci = 0, &cj = ci, *cp = ci;
decltype(ci) x = 0;  // x的类型是const int, 是顶层const
decltype(cj) y = x;  // y的类型是const int&, 底层const, 指向const的引用
```

- 对于解引用操作，**decltype**仍将得到引用类型

```c++
int i = 42, *p = &i, &r = i
decltype(r + 0) a;  // r + 0 是一个表达式, a的类型是int
decltype(r) b;  // r是一个变量，b是引用 
decltype(*p) c;  // c是一个引用
```

- decltype对于变量名 *加括号* 与 *不加括号* 得到的类型不同
  - 不加括号：得到该变量类型
  - 加括号：编译器会把它当成一个表达式，变量是可以作为赋值语句左值的特殊表达式,会得到引用类型
  - decltype((*variable*))的结果永远是引用，decltype(*variable*)的结果只有当variable本身是引用时才是引用

  ```c++
  int i = 42;
  decltype((i)) d;  // 错误：d是引用，必须初始化
  decltype(i) d;  // √
  ```