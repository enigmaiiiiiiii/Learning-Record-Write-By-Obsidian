# C++ - Array Parameter

- 数组不允许拷贝的性质，当数组作为函数的参数时通常转换成指针，实际上是传递的是首元素指针

```c++
// 三个函数等价, 参数类型都是const int *
void func(const int*);  // 
void func(const int[]);  //  
void func(const int[10]);  //  维度10没有影响
```
