# Stream

> 流可以看作[时间]中分布的一组值，[集合](Java_Collection.md)则是空间

- 避免声明多余变量
- 单线程内部实现
- 只能遍历一次
- 内部迭代

> 内部迭代便于Java提供优化，若采用for-each这样的外部迭代, 就要自己管理并行问题了

## Create Stream

[Create Stream](Java_Create_Stream.md)

## Pipeline

three part:

- source
- [intermediate operation](#Intermediate-operation)
- [terminal operation](#Terminal-Operations)

## Intermediate operation

- return a new Stream
- 可以链式调用

```java
Stream<String> twiceModifiedStream = stream.skip(1).map(element -> element.substring(0, 3));
```

Lazy Invocation

```java
public static void main(String[] args) {
    Stream<String> stream = Stream.of("d2", "a2", "b1", "b3", "c")
        .filter(s -> {
            System.out.println("filter: " + s);
            return true;
        });
}
```

- **output nothing**, filter() is not invoked

[Method List](Java_Stream_Intermediate_Operations_Method.md)

- filter()
- map()
- limit()
- takeWhile(Predictate<? super T> predicate)

## Terminal Operations

- mark the end of stream
- return a result
- one terminal operation **only use once** for one stream

[Method List](Java_Stream_Terminal_Operations_Method.md)
