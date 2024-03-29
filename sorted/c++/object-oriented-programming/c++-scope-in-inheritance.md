# C++ - Scope in Inheritance

- 派生类的作用域嵌套在其基类的作用域之内
  - 通过引用或指针调用成员时,  
     一个名字在派生类作用域内无法解析，
     则编译器将继续在**外层**的基类作用域中寻找该名字的定义, 
  > 由内而外的搜寻
  > 名字查找先于类型检查
- 内层作用域的名字**隐藏**外层作用域的名字
  >隐藏的意思是在调用派生类成员函数时，  
    内层只有名字相同而参数不同的成员，即使外层有参数名字都相同的成员,  
    编译器因找不到外层对应成员函数而报错
- 假如基类和派生类的虚函数接受的实参不同，则无法通过基类的引用或指针调用派生类的虚函数

> 参数不同则函数的类型不同, 参考[函数指针](c++-function-pointer.md)中关于函数类型的描述
