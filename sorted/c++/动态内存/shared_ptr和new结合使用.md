## shared_ptr和new结合使用

- 使用new创建的指针初始化一个**shared_ptr**类型指针，必须使用**直接初始化**,通过转换构造函数将new返回的指针来初始化只能指针
- 不能进行内置指针到智能指针的隐式转换,通过[转换构造函数](c++_Class_Convert_Constructor.md)定义的隐式转换规则实现

```c++
void process(shared_ptr<int> ptr)
{
    /// function_body
}
int *x(new int(1024));  // 用new手动分配内存给x，危险行为
process(x);  
// 错误用法, x是一个普通指针，process是接受一个shared_ptr类型参数的函数，未定义普通指针到shared_ptr的转换
process(shared_ptr<int>(x));  // 合法的，但内存会被释放
// 定义的临时shared_ptr和普通指针x指向同一对象
// 函数结束释放临时对象，x变成空悬指针
int j = *x;  // x是空悬指针
```