# std::future类模板

- 通过[[std_async函数模板]]， [[std_promise类模板]]或[[std_packaged_task类模板]]异步操作提供一个std::future对象给该异步操作的创建者
- 模板类型参数`T`表示异步操作的返回值的类型
- 模板声明
```c++
template<class T> class future;
template<class T> class future<T&>;
template<> class future<void>;
```

## 构造函数

- 默认构造函数:`future() noexcept;`
- 移动构造函数:`future(future && x) noexcept;`
- 拷贝构造函数:`future (const future&) = delete;`(不可用)

## 成员函数

- `get` : 获取结果
  - 有返回之前阻塞
  - 返回存储于共享状态的值val，同std::move(val)
  - 返回存储于共享状态的值的引用，同std::move(val)
- `wait`:等待结果变得可用
  - 有返回结果前阻塞
  - 无返回值
- `wait_for` : 等待结果，超过时间间隔，返回
- `wait_until`: 等待结果，到某个时间点仍未得到结构，返回
-`valid`: 检查future是否由共享状态