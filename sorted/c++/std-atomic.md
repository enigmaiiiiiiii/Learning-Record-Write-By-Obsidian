# std::atomic

- `std::atomic`实例化和全特化定义一个原子类型
- `std::atomic<T> atom;`: 模板类型参数T为可[拷贝构造](c++-copy-constructor.md)和可[拷贝赋值](拷贝赋值运算符.md)的类型

## 构造函数

```c++
atomic() noexcept = default;

constexpr atomic() noexcept([std::is_nothrow_default_constructible_v]<T>);

constexpr atomic( T desired ) noexcept;

atomic( const atomic& ) = delete;
```

## 其他成员

- store
  - `void store(T desired, std::memory_order order = std::memory_order_seq_cst) noexcept;`
  - 原子的替换当前值为desired