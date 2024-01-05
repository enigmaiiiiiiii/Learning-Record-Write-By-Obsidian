# Java - Stream

## Features

> A stream can be seen as a set of values distributed over **time**, while a [collection](java-collection.md) represents space.

- Avoid declaring unnecessary variables.
- Implementation within a single thread.
- Can only be traversed once.
- Internal iteration.

> Internal iteration is conducive to Java optimization. If external iteration, such as [for-each](), is adopted, one has to manage parallelism issues oneself.

## Create Stream

[Create Stream](java-create-stream.md)

## Pipeline

three part:

- source
- [intermediate operation](#intermediate-operation)
- [terminal operation](#terminal-operations)

## Intermediate operation

- return a new Stream
- it can be called by chained

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

[Method List](java-stream-intermediate-operations-method.md)

- filter()
- map()
- limit()
- takeWhile(Predictate<? super T> predicate)

## Terminal Operations

- mark the end of stream
- return a result
- one terminal operation **only use once** for one stream

[Method List](java-stream-terminal-operations-method.md)
