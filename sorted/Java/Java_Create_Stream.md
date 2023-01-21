# Create Stream

- [empty stream](#empty-stream)
- [from Collection](#from-collection)
- [from Array](#from-array)
- [Stream Builder](#stream-builder)
- [Stream generate](#stream-generate)
- [Stream iterate](#stream-iterate)

## Empty Stream

```java
Stream<String> empty = Stream.empty();
```

## From [Collection](Java_Collection.md)

```java
Collection<String> collection = Arrays.asList("a", "b", "c");
Stream<String> StreamOfCollection = collection.stream();
```

## From [Array](Java_Array.md)

```java
Stream<String> StreamOfArray = Stream.of("a", "b", "c");
```

from existing array

```java
String[] arr = new String[] {"a", "b", "c"};
Stream<String> streamOfArrayFull = Arrays.stream(arr);
Stream<String> streamOfArrayPart = Arrays.stream(arr, 1, 3);
```

## Stream Builder

> type parameter need additionally specified, Otherwise it will create an instance of `Stream<Object>`

```java
Stream<String> streamBuilder = Stream.<String>builder()
  .add("a")
  .add("b")
  .add("c")
  .build();
```

## Stream generate

- generate a stream of 10 elements

```java
Stream<String> streamGenerated = Stream.generate(() -> "element").limit(10);
```

- if not limited, it will be an infinite stream

## Stream iterate

```java
Stream<Integer> streamIterated = Stream.iterate(40, n -> n + 2).limit(20);
```

- a stream of Integer: 40, 42, ..., 80
- if no limit(), its infinite

## Stream of [Primitives](Java_Primitive_Type.md)

- Because `Stream<T>` can't use primitive as type parameters
- Java provide three primitive types stream: `IntStream, LongStream, DoubleStream`
- use those interface is unnecessary auto-boxing


```java
IntStream intStm = IntStream.range(1, 3);
LongStream longStm = LongStream.rangeClosed(1, 3);
```

