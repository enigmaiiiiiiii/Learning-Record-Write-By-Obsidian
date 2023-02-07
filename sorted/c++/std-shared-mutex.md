# std::shared_mutex

[[读写锁]]

```c++
class shared_mutex;
```

## 访问级别

- 成员函数lock_shared(), try_lock_shared()
  - 共享性获取锁: 多个线程可以共享同一互斥所有权
- 成员函数lock(), try_lock()
  - 独占性获取锁: 仅一个线程可以拥有互斥锁
- 关系
  - 只有当没有线程获得exclusive lock时,    多个线程才可以通过shared lock加锁
  - 一个线程只能拥有一个锁, shared或exclusive
