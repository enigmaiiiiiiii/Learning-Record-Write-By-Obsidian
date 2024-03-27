# C++ - Left Value Reference

- Operator: `&`

```c++
int ival = 1024;
int &refVal = ival;  // refVal是ival的别名 
```
- 引用是对象的别名, 不是对象
- 引用必须被初始化
- <font color="red">引用与初始值绑定后无法修改</font>
