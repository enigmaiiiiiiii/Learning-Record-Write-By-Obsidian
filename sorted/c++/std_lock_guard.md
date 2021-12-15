# std::lock_guard<std::mutex>

- [[RAII]]类语法模板，构造时上锁，析构时解锁
- 模板形参std::mutex
- 在作用域块空间提供互斥，离开作用域时，销毁lock_guard并释放互斥
- 不可复制
- 构造函数
  - `explicit lock_guard(mutex_type& m);`
  - `lock_guard(mutex_type& m, std::adopt_lock>`,std::adopt_lock表示:
    - lock_guard对象可以获取mutex变量 
    - 可以使用lock_guard成员函数进行对象管理`
    [[锁定策略标签类型参数]]
  - `lock_guard(const lock_guard&) = delelte`拷贝构造函数不可用
