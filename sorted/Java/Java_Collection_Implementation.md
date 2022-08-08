# 具体实现

|Interfaces|Hash Table|Resizable Array|Tree|Linkedlist|Hash table + Linked list|
|--|--|--|--|--|--|
|set|HashSet||TreeSet||LinkedHashSet|
|List||ArrayList||LinkedList||
|Queue, Deque||ArrayDeque||LinkedList||
|Map|HashMap||TreeMap||LinkedHashMap|

- 所有实现提供了其接口中包含的所有可选操作
- 所有元素都允许空元素，键和值
- 线程安全
- 可以序列化
- 支持clone()

## 链表LinkedList

## 数组列表ArrayList

## 散列集HashSet

- [散列表]为每个对象计算一个整数，成为散列码

## 树集

- TreeSet\<T\>
- 任意顺序插入，顺序输出
- 用红黑树实现

## 映射

API

- HashMap\<k, V\>
- 添加元素
  - `V put(K key, V value)`
- 更新值
  - `V put(K key, V newVal)`
  - `V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)`

  ```java
  map.merge(key, msg, String::concat)
  ```

- 返回键或值的集合
  - 键Set(集): `Set<K> keySet()`, 返回的Set并不是HashSet或TreeSet
  - 值Collection(集合): `Collection<V> values()`
  - 键值Set(集): `Set<Map.Entry<K, V>> entrySet()`

### WeakHashMap 

- 对于其他Map对象, 如果对象是活动的，垃圾回收机制不会回收Map中不再被值引用的对象
- 所以设计了WeakHashMap\<K, V\>, WeakHashMap给定键的映射的存在不会阻止该键被垃圾收集器丢弃

## LinkedHashSet 和 LinkeHashMap

- 用来记住元素的插入顺序 
- 调用get()或put()影响的元素将从当前位置删除，并放到链表末尾
- 构造函数`LinkedHashMap<K, V>(initialCapacity, loadFactor, true)`
- 可以将访问频率高的元素放在内存中, 而访问频率低的元素则从数据库中读取
