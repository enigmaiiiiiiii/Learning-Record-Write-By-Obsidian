# weak_ptr

- 指向一个由[Shared_Ptr](c++-shared-ptr.md)控制的对象
  - 不会改变shared_ptr的计数
  - shared_ptr对象被销毁, weak_ptr一同被销毁
- `weak_ptr`要用`shared_ptr`来初始化
- 通常不单独使用，只能和 `shared_ptr` 配使用
- 将一个`weak_ptr`绑定到一个`shared_ptr`不会改变`shared_ptr`的引用计数
- 没有重载 `operator->` 和 `operator*`, 不能访问成员和对象  

## 具体用法

- `wpr.lock()`检查weak_ptr指向的对象是否存在
  - 存在: 返回shared_ptr
  - 不存在: 返回空shared_ptr