# condition_variable

## 构造函数

- `condition_variable()`
- `condition_variable(cosnt condition_variable&) = delete`
- 无参数
- 不可拷贝构造

## 通知

- `notify_one()` : 解除阻塞等待线程之一
- `notify_all()`: 
- 无参数
- 无返回值

## 等待

- 阻塞当前进程等待条件满足

```c++
void wait(std::unique_lock<std::mutex>& lock);
void wait(std::unique_lock<std::mutex>& lock, Predicate stop_waiting)
```
- 参数
  - `lock`:  必须是当前线程锁定的 `std::unique_lock<std::mutex>`类型对象 
    [[std_unique_lock]]
  - pred: 谓词, 返回false表示应该继续等待