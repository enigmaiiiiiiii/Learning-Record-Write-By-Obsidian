# 线程竞争

## 同步代码块

- synchronized关键字修饰的代码块

```java
synchronized(obj) {
    // method body
}
```

- obj必须是引用类型
- 每个Java对象都可以用作一个实现同步的锁，这些锁称为内置锁(监视器锁)
- 修饰方法时: 表示整个方法是一个同步代码块要调用该方法必须获得[内部对象锁]
  - obj相当于this
  - method是整个方法体
  - 修饰静态方法时, 以[Class对象](java-reflect.md)作为obj

## 锁对象

- 锁对象相对于隐式锁的最大优势: 可以使用tryLock()尝试获取锁, 如果不能立刻获取锁, 或没能在规定时间获取锁， 则返回false

## 条件变量

- Condition

## 内部同步方法

- 内部条件有wait(), notify(), notifyAll()方法
  - wait(), notify(), notifyAll()在Object中是被标记为final的方法
  - 所以condition类方法被命名为await(), signalAll(), signal()以避免冲突
  - 只能在同步方法中调用
- notifyAll(): 解除**该对象**上调用wait()的方法的线程阻塞状态
- notify(): 解除**该对象**上一个调用wait()方法的线程阻塞状态
- wait(): 导致线程进入阻塞状态知道被通知
