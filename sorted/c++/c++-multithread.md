# c++多线程

## 线程

[std::thread类](std-thread类.md)

## 互斥量

[[标准库mutex]]

[std::lock()函数](std-lock()函数.md)

## 条件变量

[std::condition::variable](std-condition-variable.md)

## 异步

[[std_future类模板]]
- 用于主线程获取子线程的返回值

[[std_async函数模板]]

[[std_packaged_task类模板]]

[std::promise类模板](std-promise类模板.md)

## 原子类型

[std::atomic](std-atomic.md)

## 读写锁 

[[std_shared_mutex]]

## 应用

### 线程安全队列

[[线程安全队列]]

### 异常安全

### 线程池

> 重用线程而不是创建线程
- 创建线程并阻塞, 线程等待任务
- 提交任务