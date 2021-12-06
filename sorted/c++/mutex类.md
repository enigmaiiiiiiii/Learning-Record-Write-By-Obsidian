# mutex类

- `mutex` 类是能用于保护共享数据免受从多个线程同时访问的同步原语。
-   调用方线程从它成功调用 `lock` 或 `try_lock` 开始，到它调用 `unlock` 为止_占有_ `mutex` 。
-   线程占有 `mutex` 时，所有其他线程若试图要求 `mutex` 的所有权，则将阻塞（对于 `lock` 的调用）或收到 false 返回值 ）.
- 调用方线程在调用 `lock` 或 `try_lock` 前必须不占有 `mutex` 。
- 通常不直接使用
- lock()
  - 原子操作
  - 阻塞调用线程
- try_lock()
  - 原子操作
  - 试图获得mutex的所有权，而不阻塞
- unlock()
  - 原子操作
  - 释放调用线程mutex所有权