# Java Stream Intermediate

## map()

method reference

```java
List<String> list = Arrays.asList("a", "b", "c");
List<String> upperList = list.stream().map(String::toUpperCase).collect(Collectors.toList());
```

lambda

```java
List<Integer> list = Arrays.asList(1, 2, 3);
List<Integer> mul2list = list.stream().map(x -> x * 2).collect(Collectors.toList());
```

