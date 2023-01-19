# Collection Instance Method


## contains(Object o)

- 如果集合包含指定的元素，则返回true
- 当且仅当该集合包含至少一个元素e，Objects.equals(o, e);

## foreach

`foreach(Consumer<? super T> action)`

- 对集合中的每个元素执行指定的操作

`Consumer<T>` instance as parameter

```java
String[] names = {"Tom", "Jerry", "Mike"};
Consumer<String> printConsumer = new Consumer<String>() {
    public void accept(String name) {
        System.out.println(name);
    }
}
names.forEach(printConsumer);
```

lambda expression as parameter

```java
String[] names = {"Tom", "Jerry", "Mike"};
names.forEach(name -> System.out.println(name));
```
