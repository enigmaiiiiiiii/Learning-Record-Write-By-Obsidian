# 转换构造函数

- **只接受一个实参的构造函数**, 实际上<u>定义了</u>转换为此类型的隐式转换机制, 
- 把构造函数声明成**[explicit]**可以阻止这种隐式转换
- **隐式类型**转换只允许一步类型转换
  - 正确: "999" $\longrightarrow$ string $\longrightarrow$ Sales_data
  - 错误: "999" $\longrightarrow$ Sales_data
- c++定义了几种内置类型之间的自动转换的规则