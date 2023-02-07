# std::make_shared

- 返回`std::shared_ptr<T>`的函数
- 最安全的分配和使用动态内存的方法
- args对应类型T的构造函数的参数
- 类似顺序容器的emplace成员

```c++
template< class T, class... Args >
shared_ptr<T> make_shared( Args&&... args );

template<class T>
shared_ptr<T> make_shared( std::size_t N );

template<class T>
shared_ptr<T> make_shared();

template<class T>
shared_ptr<T> make_shared( std::size_t N, const std::remove_extent_t<T>& u );

template<class T>
shared_ptr<T> make_shared( const std::remove_extent_t<T>& u );

template<class T>
shared_ptr<T> make_shared_for_overwrite();

template<class T>
shared_ptr<T> make_shared_for_overwrite( std::size_t N );
```

- 参数
  - args: 类型T构造函数的参数
  - N: 
  - u: