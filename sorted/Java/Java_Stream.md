# Stream

> 流可以看作[时间]中分布的一组值，[集合](Java_Collection.md)则是空间

- 避免声明多余变量
- 单线程内部实现
- 只能遍历一次
- 内部迭代

> 内部迭代便于Java提供优化，若采用for-each这样的外部迭代, 就要自己管理并行问题了

## 中间操作(Intermediate operation)) 

- 返回另一个Stream
- filter()
- map()
- limit()
- takeWhile(Predictate<? super T> predicate)

## 终端操作(Terminal operations)

- 用于收集数据
- count(), forEach(), collect()
- 生成结果，如List, Integer