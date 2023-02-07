# std::lock()

```c++
template<class Lockable1, class Lockable2, class LockableN>  
void lock( Lockable1& lock1, Lockable2& lock2, LockableN& lockn );
```
- 使用避免死锁算法为给定的可锁对象`lock1,lock2,...`加锁
- 如果对 lock 或 unlock 的调用导致异常，则在重新抛出之前为任何锁定的对象调用 unlock