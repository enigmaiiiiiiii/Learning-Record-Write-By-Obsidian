# 集合接口

- 表示一组对象

## Interface Collection(Collection接口)

- Iterable\<E\>, 是所有Collection相关接口的超类接口, E默认为Object
- 用于实现包含一组元素的类的根接口
- 实现Collection\<T\>的类提供了两个构造函数 
  - 创建一个空集合
  - 复制一个集合
- for(element e : IterableInstace)语句只能用于实现了Iterable\<E\>接口的类

1. Interface Set

- 不包含重复元素的集合

> 换句话说不会存在这样两个元素e1, e2, 使e1.equals(e2)为true

- Interface SortedSet

2. Interface List

- 可以包含重复元素
- 可以通过索引访问元素
- 可以再任意位置插入元素

3. Interface Queue

- 队列集合

4. Interface Deque

- 双端队列集合

## Interface Map(Map接口)


- 键值对容器
- 键不能重复
- 提供类三个collection views
  - keySet()
  - values()
  - entrySet()

> for(element e : IterableInstace)不能用于Map实例

Interface SortedMap
