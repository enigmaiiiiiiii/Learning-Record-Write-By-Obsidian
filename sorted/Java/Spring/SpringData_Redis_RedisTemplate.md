# RedisTemplate

- Redis的的抽象实例
- `RedisTemplate<K, V>`: 连接管理和数据操作
  - `K`: **Redis**的key的类型, 通常时`String`
  - `V`: **Redis**的value的类型
- 大多数操作基于[序列化和反序列化](Java_ObjectIOStream.md), 默认使用java的序列化
  - 写入对象时，需要序列化
  - 读取对象时，需要反序列化

## 返回操作实例

- `BoundValueOperations<K, V> boundValueOps(key)`: 返回指定key的BoundValueOperations实例
- `ValueOperations<K, V> opsForValue()`: 返回单个值操作实例
- `ListOperations<K, V> opsForList()`: 返回列表操作实例 
- `Set<K> keys(K pattern)`: 获取所有的key

## `BoundValueOperations<K, V>`

> 绑定到指定key的操作对象

**取值**

- `get()`: 获取此key的值

**设置值**

- set(V value):
- set(V value, long timeout, TimeUnit unit): 设置值并设置过期时间
  - `timeout`: 过期时间
  - `unit`: 时间单位

## ValueOperations<K, V>: 

> 单个值的操作实例

- `void set(K key, V value)`: 设置key的值为value
- `V get(K key)`: 获取key的值

## ListOperations<K, V>: 

> 左边是头，右边是尾

- Long leftPush(K key, V value): 将value插入到key对应的列表的头部
- Long rightPush(K key, V value): 将value插入到key对应的列表的尾部
- Long leftPop(K key): 移除并返回key对应的列表的头部元素
- Long rightPop(K key): 移除并返回key对应的列表的尾部元素
- List<V> range(K key, long start, long end): 获取key对应的列表的[start, end]范围内的元素

## StringRedisTemplate

- StringRedisTemplate是RedisTemplate的子类
- 用于通过String操作redis数据

```java
public class StringRedisTemplate extends RedisTemplate<String, String>
```