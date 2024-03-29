# 类型转换

- c++不会将两个不同类型的值直接相加
- 隐式转换由编译器自动执行
- 隐式转换尽量不损失精度
- 隐式转换发生条件
  - 比int类型小的整型值提升为较大的整数类型
  - 在**条件**中，非bool值转换bool类型
  - 初始化过程，初始值转变为变量类型
  - 赋值语句中，右侧运算对象转换为左侧对象类型
- 多对象，多类型运算中，转换成同一类型
- 转换成bool，指针或算数类型值为0，转换成false

```c++
int val = 3.14 + 3;
/* 
3.14是double，3先转换成double和3.14相加得到double, 
int对象初始化，将double去掉小数点变为int
*/
```

[显式转换](c++-显式转换.md)

- downcast: 基类转派生类
- upcast: 派生类转基类

## static_cast

- [static_cast](c++-static-cast.md)

## dynamic_cast

- 转换前执行类型检查

## const_cast

## reinterpret_cast