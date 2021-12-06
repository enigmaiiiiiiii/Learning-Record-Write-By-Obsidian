# std::unique_lock

```c++
template<class Mutex>
class unique_lock;
```

- 相比std::lock_guard更加灵活
- 可以传递多种[[锁定策略标签类型参数]]
- 模板形参，满足basicLockable[^lock] Mutex
 [^lock]: 满足m.lock()能为当前执行代码取得锁为止, m.unlock()执行代码释放非共享锁
