# Thread类

## 启动线程

- start()

## 等待线程结束

- join()
- join(long millis) throws InterruptedException
  - 等待最多millis毫秒
  - millis为0, 意味着一直等待

## 方法

- currentThread() 当前线程对象
- isAlive() 线程是否活动
- isDaemon() 线程是否是[守护线程]()
- isinterrupted()
- getPriority() 获取线程优先级
