# pair

- 包含两个成员，first和second,成员是公有的
- 定义在utility标准库
- `pair<T1, T2> p;`, 保存一个T1类型元素，一个T2类型元素, 并默认初始化
- 返回pair对象的函数，可以通过返回列表进行初始化`return {va1, val2};`

```c++
pair<T1, T2> p;  // 声明p是一个pair，两个元素默认初始化
pair<T1, T2> p(v1, v2);  // 用v1, v2初始化pair中的两个元素
pair<T1, T2> p = {v1, v2};  //  等价于p(v1, v2)
make_pair(v1, v2)  // 返回一个用v1和v2初始化的pair，pair的类型有编译器推断
p.first  // 返回p的名为first的(公有)数据成员
p.second  // 返回p的名为second的(公有)数据成员
p1 relop p2; // 关系运算，<=, >=, <, >
p1 == p2;
p1 != p2;
```