# 集合接口

- 表示一组对象
- Iterable\<E\>, 是所有集合相关接口的超类接口, E默认为Object

## Interface Collection

- 用于实现包含一组元素的类的根接口
- 实现Collection\<T\>的类提供了两个构造函数 
  - 创建一个空集合
  - 复制一个集合

### Interface Set

- 不包含重复元素的集合

> 换句话说不会存在这样两个元素e1, e2, 使e1.equals(e2)为true

- Interface SortedSet

### Interface List

- 可以包含重复元素
- 可以通过索引访问元素
- 可以再任意位置插入元素

### Interface Queue

- 队列集合

### Interface Deque

- 双端队列集合

## Interface Map

- 键值对容器，
- 键不能重复

Interface SortedMap
