# 顺序容器

容器元素是拷贝

- 调用对象的[拷贝构造函数](c++_Copy_Constructor.md)

概念

- 包括**vector(向量), deque(双端队列), list(链表), forward_list(单向链表), array(数组), string(字符串)**
- 除array外，标准库容器都可以改变大小

容器选择原则

- 要求随机访问容器元素应使用vector或deque
- 在头尾插入或删除，而不会在中间位置进行插入或删除，则使用deque


[[c++_Container_Operate]]

[[容器类型成员]]

[[容器定义和初始化]]

[[赋值和swap]]
  
[[关系运算符]]

[[顺序容器操作]]

[[vector对象是如何增长的]]

[[容器适配器]]