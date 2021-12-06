## 标准库bind函数

- 作用：
  - 适应可调用对象接受的谓词数量，接受一个可调用对象(*callable*)，生成一个新可调用对象(*callable*)
  - 重排参数顺序
- 一般形式:`auto newCallable = bind(callable, arg_list);`
- arg_list对应callable函数的参数
- _num参数用来表示 *newCallable* 的第num个参数
  - _num占位参数定义在一个placeholders命名空间，placeholders本身命名在std命名空间
  - _num参数可以用来定义 *newCallable* 的参数顺序
- 参数的传递方式是拷贝
- 对于不能拷贝的对象，需要使用标准库函数ref

  ```c++
  bind(print, ref(os), _1, ' ');
  ```

```c++
auto check6 = bind(check_size, _1, 6);  // 用check_size定义了一个新函数check6, check6只接受一个参数
```