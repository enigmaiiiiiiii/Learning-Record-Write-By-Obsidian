# std::scoped_lock

```c++
template< class... MutexTypes >  
class scoped_lock;
```

- 是[[RAII]]类型的模板
- 用于在作用域内拥有一个或多个互斥锁
- 对于多个互斥锁，使用与[[std_lock()函数]]相同的算法