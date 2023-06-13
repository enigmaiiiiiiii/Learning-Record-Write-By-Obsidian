# C++ - left value and right value

## Summary

- 赋值语句左侧的一定是左值，右侧可以是左值也可是右值

## left value

以下运算符的求值结果是左值

- 内置解引用运算符
- 下标运算符
- 迭代器解引用运算符
- string和vector的下标运算符
- 前置递增/递减

## right value

- 不能取地址，没有名字，临时
- 函数的**非引用类型**返回值
- 算数，关系，位运算符
- 后置递增/递减