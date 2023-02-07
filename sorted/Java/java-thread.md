# 多线程

## 主线程

## 定义线程

[定义线程](java-thread-define.md)

## Thread类

[Thread类](java-thread-class.md)

## 线程竞争

[线程竞争](java-thread-competition.md)

## 线程状态

new
Runnable
Running
IOBlock
SleepBlock
WaitBlock

## 线程池

```java
ExecutorService threadPool = Executors.newFixedThreadPool(10);
```

## ThreadLocal

- ThreadLcal是一个泛型类，可以用来保存任何类型的数据
- 设置线程属于当前线程的局部变量
- 区别于线程的局部变量, ThreadLocal通常是**创建线程的方法**所属**对象**的私有静态变量, 即**定义在线程外部**

```java
```