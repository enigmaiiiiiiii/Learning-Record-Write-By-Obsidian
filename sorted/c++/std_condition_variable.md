# condition_variable

#thread #多线程

## 构造函数
```c++
condition_variable();
condition_variable(const condition_variable&) = delete;
```
- 无参数
- 不可拷贝构造

## 其他成员

### 通知notify_one()
- `notify_one()` : 解除阻塞等待线程之一
- `notify_all()`: 
- 无参数
- 无返回值
  
### 等待wait()

```c++
void wait(std::unique_lock<std::mutex>& lock);

template<class Predicate> 
void wait(std::unique_lock<std::mutex>& lock, Predicate pred)
```

- 调用wait()发生三件事
  - 解锁lock 
  - 阻塞当前进程 
  - 等待notify_one()或notify_all()
- 解除阻塞后lock再次锁定
- 参数
  - `lock`:  必须是当前线程锁定的 `std::unique_lock<std::mutex>`类型[对象](std_unique_lock.md)
  - pred:  谓词, 返回false表示应该继续等待, 等价于
  
  ```c++
  while (!pred()) {
    wait(lock);
  }
  ```

### wait_for()

```c
template< class Rep, class Period >
std::cv_status wait_for( std::unique_lock<std::mutex>& lock,
                         const std::chrono::duration<Rep, Period>& rel_time);
template< class Rep, class Period, class Predicate >
bool wait_for( std::unique_lock<std::mutex>& lock,
               const std::chrono::duration<Rep, Period>& rel_time,
               Predicate pred);
```

- 阻塞等待期间， 被 notify 唤醒 或 经过rel_time时间 被[虚假唤醒](Spurious wakeup.md)
- rel_time：表示等待所消耗的最大时间，std::chrono::duration对象
- 返回cv_status
  - std::cv_status::no_timeout : 条件变量被notify唤醒
  - std::cv_status::timeout: 条件变量因时限耗尽被唤醒