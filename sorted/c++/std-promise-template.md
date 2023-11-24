# C++ - std::promise

- Template Declaration

```c++
template< class R > class promise;
template< class R > class promise<R&>;
template<>          class promise<void>;
```
  
## 构造函数

```c++
promise();

template< class Alloc >  
promise(std::allocator_arg_t, const Alloc& alloc);

promise( promise&& other ) noexcept;  // 移动构造

promise( const promise& other ) = delete;  // 拷贝构造不可用
```

- 参数
  - alloc: 分配器
  - other: 其他的std::promise对象

## get_value()   

```c++
std::future<T> get_future()
```
- 无参数， 返回与`*this`共享状态的[future](std-future类模板.md)  

## set_value()

```c++
void set_value( const R& value );
void set_value( R&& value );
void set_value( R& value );
void set_value();
```
   
- value: 要存储与共享状态的值
   
## set_value_at_thread_exit

- 线程结束后，共享的value处于可用状态
- value: 要存储与共享状态的值

   
