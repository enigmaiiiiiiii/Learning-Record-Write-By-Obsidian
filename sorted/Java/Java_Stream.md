# Stream

> 流可以看作[时间]中分布的一组值，[集合](Java_Collection.md)则是空间

- 避免声明多余变量
- 单线程内部实现
- 只能遍历一次
- 内部迭代

> 内部迭代便于Java提供优化，若采用for-each这样的外部迭代, 就要自己管理并行问题了

## create stream

empty stream

```java
Stream<String> empty = Stream.empty();
```

from [Collection](Java_Collection.md)

```java
Collection<String> collection = Arrays.asList("a", "b", "c");
Stream<String> StreamOfCollection = collection.stream();
```

from [Array](Java_Array.md)

```java
Stream<String> StreamOfArray = Stream.of("a", "b", "c");
```

- from existing array

```java
String[] arr = new String[] {"a", "b", "c"};
Stream<String> streamOfArrayFull = Arrays.stream(arr);
Stream<String> streamOfArrayPart = Arrays.stream(arr, 1, 3);
```

Stream Builder

```java
```


## Pipeline

```java
```

## 中间操作(Intermediate operation)

- 返回另一个Stream
- filter()
- map()
- limit()
- takeWhile(Predictate<? super T> predicate)

## 终端操作(Terminal operations)

- 用于收集数据
- count(), forEach(), collect()
- 生成结果，如List, Integer