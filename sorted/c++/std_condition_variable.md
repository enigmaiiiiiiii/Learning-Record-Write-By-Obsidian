# condition_variable

#thread #对线程

## 构造函数
```c++
condition_variable();
condition_variable(const condition_variable&) = delete;
```
- 无参数
- 不可拷贝构造

## 其他成员

### 通知
- `notify_one()` : 解除阻塞等待线程之一
- `notify_all()`: 
- 无参数
- 无返回值
  
### 等待

```c++
void wait(std::unique_lock<std::mutex>& lock);

template<class Predicate> 
void wait(std::unique_lock<std::mutex>& lock, Predicate pred)
```

- 解锁lock, 阻塞当前进程等待notify_one()或notify_all()
- 
- 参数
  - `lock`:  必须是当前线程锁定的 `std::unique_lock<std::mutex>`类型对象 
    [[std_unique_lock]]
  - pred: 谓词, 返回false表示应该继续等待, 等价于
  
  ```c++
  while (!pred()) {
    wait(lock);
  }
  ```