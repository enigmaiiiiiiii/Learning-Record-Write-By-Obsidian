# 标准库function类

- 在头文件`<functional>`中
- `std::function<T> f;`： 用来存储可调用对象的空function，T表示函数类型
- `std::function<T> f(nullptr);`: 显式构造一个空function
- `std::function<T> f(obj);` :  f中存储可调用对象obj的副本
- 对于一个`std::function<T>`的实例`f`作为条件时：含有可调用对象为真，否则为假
- `f(args)`: 调用f中的对象, 参数args
- function的成员类型
  - result_type
  - argument_type
  - first_argument_type
  - second_argument_type
- 不能将重载函数的名字存入function对象，使用[[函数指针]]解决二义性问题 
