# std_move函数

- utility头文件
- 返回一个绑定到左值上的[右值引用](c++_rvalue_reference.md)
- move后源对象除**赋值**或**销毁**外，不再使用
- move不会重新分配内存
- 移动后的源对象必须可析构

[std_forward函数](std_forward函数模板.md)