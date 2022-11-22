# union

- 一种节省空间的类
- 一种特殊类: 任意时刻只有一个数据成员可以有值 
- 给某个成员赋值之后，其他成员变成未定义状态
- 所有成员共享内存空间的特性, 与其他成员的未定义状态不冲突，数组例外

>  [判断字节序的代码](判断机器字节序.md)

- 定义union

  ```c++
  union Token {
  // 默认情况下成员是公有的
  char cval;
  int ival;
  double dval;
  } 
  // 定义了一个名为token的Union

  Token first_token = {'a'};  // 初始化cval成员
  Token last_token;  // 未初始化的Token对k象
  Token *pt = new Token; 
  ```

## 匿名union

- 可以直接访问它的成员

```c++
union {
  char cval;
  int ival;
  double dval;
};
cval = 'c';
```