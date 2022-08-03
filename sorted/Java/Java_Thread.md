# 多线程

## 主线程

## [定义线程](Java_Thread_Define.md)

## Thread类

[Thread类](Java_Thread_Class.md)

## 优先级

- 同一核心上的线程，优先级越高的线程获得的时间片越多

## 竞争条件

## 锁对象

## 条件变量

- Condition

## synchronized关键字

- 声明一个方法: 要调用该方法必须获得[内部对象锁]
- 内部条件有wait(), notify(), notifyAll()方法
  - wait(), notify(), notifyAll()在Object中是被标记为final的方法
  - 所以condition类方法被命名为await(), signalAll(), signal()以避免冲突
  - 只能在同步方法中调用
- notifyAll(): 解除**该对象**上调用wait()的方法的线程阻塞状态
- notify(): 解除**该对象**上一个调用wait()方法的线程阻塞状态
- wait(): 导致线程进入阻塞状态知道被通知

## 线程状态

new
Runnable
Running
IOBlock
SleepBlock
WaitBlock
