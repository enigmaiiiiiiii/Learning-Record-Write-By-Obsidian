# std::packaged_task

- 包装[[可调用类型]]对象，使被包装对象能够异步调用，返回值存储在[[std_future类模板]]对象中

```c++
template<class R, class ...Args>
class packaged_task<R(Args...)>
```
- `std::packaged_task<T> task(fn)`: 用fn构造一个`std::packaged_task<T>`对象 , T对应fn的类型
- `T`: 模板的类型参数, 包括:
  - R: 可调用类型的返回类型
  - Args: 可调用类型的参数类型
  - 以 *参数类型Args* 调用 *返回类型为R* 的可调用类型

## 构造函数

```c++
packaged_task() noexcept;

template <class Fn>
  explicit packaged_task (Fn&& fn);

template <class Fn, class Alloc>
  explicit packaged_task (allocator_arg_t aa, const Alloc& alloc, Fn&& fn);

packaged_task (packaged_task&) = delete;

packaged_task (packaged_task&& rhs) noexcept;
```

-  函数参数
  - fn: 可调用对象
  - a: 分配器
  - rhs: 要移动的packaged_task对象

## 其他成员

- `get_future`: 返回异步调用结果至[[std_future类模板]]对象
- `operator()`: 执行std::packaged_task对象包装的函数
- `valid`
- `swap`
- `make_ready_at_thread_exit`