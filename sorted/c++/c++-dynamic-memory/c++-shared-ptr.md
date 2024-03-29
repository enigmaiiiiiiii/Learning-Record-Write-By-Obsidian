# shared_ptr类模板

[std::make_shared](std-make-shared.md)  

 ![shared_ptr和unique_ptr都支持的操作](c++手册.md#shared-ptr和unique-ptr都支持的操作)
 
shared_ptr有关联计数

- 当一个shared_ptr被拷贝，计数器递增
- 当一个shared_ptr被赋值或销毁，计数器递减
- p.use_count()返回与p共享对象的智能指针的数量，可能很慢，主要用于调试

get成员函数

- 为了向不能使用智能指针的代码传递一个**内置**指针，不要使用get为另一个智能指针赋值, 虽然编译器不会报错

智能指针可以确保在程序发生异常时资源被正确释放

- 通过[析构函数](c++-destructor.md)或[自定义操作](cpp-callable-type.md)销毁

> 对于没有析构函数的类可以通过shared_ptr来释放对象`shared_ptr<T> p(p1, deletefunc);`

智能指针使用基本规范

- 不使用相同的内置指针初始化多个智能指针
- 不delete `get()`返回的指针
- 不使用`get()`初始化或`reset`另一个智能指针
- 如果使用了get()返回的指针，当最后一个对应的智能指针销毁后，指针就变为无效
- 如果使用智能指针管理的资源不是new分配的内存，记得传递给它一个删除器
  
  ```c++
  struct destination;
  struct connection;
  connection connect(destination*)
  void disconnect(connection);
  void end_connection(connection *p) {
    disconnect(*p);
  }
  void f(destination &d) {
    connection c = connect(&d);
    shared_ptr<connection> p(&c, end_connection)  
    // end_connection 是一个可调用函数，完成销毁操作
    // p被销毁时，不会执行delete,而是调用end_connection
  }
  ```
  
- 由新的标准库提供的一种管理动态内存的方法
- 智能指针的一种

初始化智能指针

```c++
shared_ptr<string> p4 = make_shared<string>(10, '9');
```

- 初始化对象方式类似顺序容器中的emplace

