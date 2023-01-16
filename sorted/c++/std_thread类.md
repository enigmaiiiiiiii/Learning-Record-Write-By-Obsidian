# thread类

[[线程创建]]

## c++ 中的线程

- `std::thread`类表示单个线程, 用[[cpp-callable-type]]进行构造
- 使用c++线程库启动线程，可归结为构造`std::thread`对象
- 线程在构造关联的线程对象时立即开始执行
- 不可拷贝构造和拷贝赋值
- 可移动构造和可移动赋值  

## 构造函数

- `thread() noexcept;`
- `thread(thread&& other) noexcept`
- `template<class func, class...args> explicit thread(func&&, args&&...args);`
  - 并不会开始新线程
- 线程函数的参数 
  ```c++
  void f(int i, std::string const& s);
  std::thread t(f, 3, "hello");
  ```
  - 线程函数的参数默认移动或拷贝传递
  - 传递引用参数，需要std::def将参数转换为引用的形式
  - 类内部创建的以类的成员创建的线程, [this](c++_structure_this.md)作为隐式形参
   
## 成员函数   
- 等待线程完成, 对应Linux库函数 [[pthread_jion()]]
  - 对于std::thread对象my_thread, 使用 `my_thread.join()`回收线程
  - `my_thread.joinable()`检查线程是否可被回收
- 后台运行线程
  - 对于std::thread对象my_thread, 使用 `my_thread.detach()`分离线程
  - c++可以保证当线程退出时，相关资源能正确回收
  
## this_thread命名空间  

> 访问的是当前调用线程，所以出现在函数或成员函数中 

- 命名空间中提供了一组对当前线程的访问函数
  - `get_id`
  - `yield`: 为执行提供提示，重新安排线程的执行时间，允许其他线程运行
    > 依赖于OS调度机制和系统状态，如先进先出调度器(linux的SCHED_FIFO), 悬挂当前线程并放到同优先级的末尾, 若无其他线程在同优先级则无效
  - `sleep_until`
  - `sleep_for`
  

## 转移线程所有权

[[std_move函数]]

```c++
void some_function();
void some_other_function();
std::thread t1(some_function); // 1
std::thread t2=std::move(t1); // 2
t1=std::thread(some_other_function); // t1绑定临时对象，隐含移动操作
std::thread t3; // 4
t3=std::move(t2); // 5
t1=std::move(t3); // 6 赋值操作, 程序出错
```

## 运行时决定线程数量

- `std::hardware::hardware_concurrency()`: 返回cpu核心数量

## 获取线程id

- 线程标识类型为std::thread::id
- 获取方式: 
  - std::thread对象调用成员函数get_id()
  - 在当前线程调用std::this_thread::get_id()函数
  