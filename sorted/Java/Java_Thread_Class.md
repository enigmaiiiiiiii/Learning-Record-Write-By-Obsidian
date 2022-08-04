# Thread类

## 启动线程

- start()

## 等待线程结束

- join()
- join(long millis) throws InterruptedException
  - 等待最多millis毫秒
  - millis为0, 意味着一直等待

## 守护线程

- 当运行的线程都是守护线程时，Java虚拟机将退出。
- setDaemon(boolean daemon)将线程设置为守护线程
  - 必须在start()之前调用

## 优先级

- 同一核心上的线程，优先级越高的线程获得的时间片越多

## 线程中断

## 方法

- currentThread() 当前线程对象
- isAlive(): 线程是否活动
- isDaemon(): 线程是否是[守护线程]()
- isinterrupted()
- getPriority() 获取线程优先级
- sleep(): 在指定的毫秒数内阻塞当前线程
- interrupt(): 中断线程
- static yield(): 提示调度器当前线程愿意放弃其当前对处理器的使用，调度器可以决定是否忽略这个提示