# 标准库bind函数

```c++
template <class Fn, class... Args>
  /* unspecified */ bind (Fn&& fn, Args&&... args);

template <class Ret, class Fn, class... Args>
  /* unspecified */ bind (Fn&& fn, Args&&... args);
```  

- 返回一个新的可调用对象，满足`std::is_bind_expression<T>::value == True`
- 参数
  - fn: 可调用对象
  - args: 要绑定的参数，可用占位符替换

## 形成新的可调用对象 

- 一般形式

```c++
auto newCallable = bind(callable, arg_list);
newCallable();
```
 
- 作用：
  - 适应可调用类型接受的参数数量，接受一个可调用对象`callable`，生成一个新可调用对象`newcallable`
  - 重排参数顺序
- arg_list对应*callable*函数的参数
- 在`bind(callable, std::placeholders::_num, arg)`中, `_num`是占位参数, 用来表示 `newCallable` 的第num个参数
  - `_num`占位参数定义在一个`placeholders`命名空间，`placeholders`本身命名在std命名空间
  - `_num`参数可以用来定义 `newCallable` 的参数顺序
- 参数的传递方式是拷贝
- 对于不能拷贝的对象，需要使用标准库函数ref

  ```c++
  bind(print, ref(os), _1, ' ');
  ```
