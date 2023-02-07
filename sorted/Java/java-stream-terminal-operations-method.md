# Java Stream Treminal Operations Methods

## collect()

`<R> R collect(Supplier<R> supplier, BiConsumer<R, ? super T> accumulator, BiConsumer<R, R> combiner)`

- take three parameter
  - supplier
  - accumulator
  - combiner

`<R, A> R collect(Collector<? super T, A, R> collector)`

- take one parameter [Class Collectors](java-stream-collectors.md)

## foreach()

## reduce()

- return **a single value**

it can take three parameter

- identity
- accumulator
- combiner
  - only used in parallel stream

reduce 1, 2, 3 to 6$(1+2+3)$

```java
OptionalInt reduced = IntStream.range(1, 4)
  .reduce((a, b) -> a + b);
```

reduce 1, 2, 3 to 16$(10+1+2+3)$

```java
int reducedTwoParams = IntStream.range(1, 4)
  .reduce(10, (a, b) -> a + b);
```

reduce with third parameter

-   to show that third parameter is not used in sequential stream
-   result is still 16$(10+1+2+3)$

```java
int reducedParams = Stream.of(1, 2, 3)
  .reduce(10,
          (a, b) -> a + b,
          (a, b) -> {
            log.info("combiner was called");
            return a + b;
  });
```

reduce in parallel stream

- result is 36$((10 + 1) + (10 + 2) + (10 + 3))$

```java
int reducedParallel = Arrays.asList(1, 2, 3).parallelStream()
    .reduce(10,
            (a, b) -> a + b,
            (a, b) -> {
              log.info("combiner was called");
              return a + b;
    });
```

## min()

## sum()
