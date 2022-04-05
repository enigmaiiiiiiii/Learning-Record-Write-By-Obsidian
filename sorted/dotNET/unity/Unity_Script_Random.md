# 随机数

> UnityEngine.Random

## 伪随机

- 算法: Xorshift128

## 与System.Random的区别

- UnityEngine.Random是一个静态类，全局只有一个实例
- 不适用于多线程，当需要多个独立随机数时, Unity随机数不适用
- Unity包含最大值，尽管罕见
- 性能比System.Random快20%到40%
- 容易被混用，命名空间System和UnityEngine中都有Random
  - 可以使用using Random = UnityEngine.Random来避免混淆
