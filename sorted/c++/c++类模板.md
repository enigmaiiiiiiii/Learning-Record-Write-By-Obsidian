# 类模板

- `template <typename T> class Blob {}`
- 类的成员函数也是一个模板, 必须以`template <typename T>`开头
- 类内部的成员函数隐式声明为[内联函数](c++_inline_function.md)
- 编译器不能为类模板推断模板参数类型
- 如果一个成员函数没有被使用就不会被实例化
- 定义在类外部的成员函数必须以关键字template开始，类名称后接模板形参列表
```c++
template <typename T>
class thread_safe_stack{
  thread_safe_stack();
  void pop();
}
```
- 类外定义thread_safe_stack类模板的pop()成员函数
```c++
tempalte <typename T>
void thread_safe_stack<T>::pop() {}
```

## 类模板的友元

[[友元]]

- 类和模板可以声明模板友元和模板实例友元  
- 为了引用模板的一个特定实例，必须先声明模板自身 
  - 模板声明`template <typename> class friend_template;`
- 声明模板友元
  - `friend calss pal<c>`: 模板pal用类c实例化的友元
  - `template <typename T> friend class pal2;`模板pal2的所有实例为友元
- 模板可以将类型参数声明为友元  

  ```c++
  template <typename Type> class Bar {
    friend Type;
  }
  ```
  

