# 泛型

## Introduction

```java
public class Generic<T> {
    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey() {
        return key;
    }

    // 静态方法
    public static<T> Generic<T> getGeneric(T key) {
        return new Generic<>(key);
    }

    // 返回空类型泛型
    public static Generic<Void> getGeneric() {
        return new Generic<>(null);
    }
}
```

## Generic Class

```java
public class Box<T> {
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
```

## Type parameter Naming Conventions Name

- E: Element
- K: Key
- N: Number
- T: Type
- V: Value
- S, U, V

## Generic Method

for instance method

- must declare in [generic class](#generic-class)

```java
public class Box<T> {
    private T t;

    public T get() { return t; }
}
```

## Static Generic Method

- Type parameter 不需要和所在类的 Type Parameter 相同
- 也不需要声明在 Generic Class 中

```java
public class Util {
    public static<T> boolean compare(T t1, T t2) {
        return t1.equals(t2);
    }
}
```

## Bounded Generics

- by `T extends Number` you can restrict type of `T` to `Number`

```java
public static<T extends Dopamine> void fx(T list) {
    for (Dopamine n : list) {
        System.out.println(n);
    }
}
```

## Wildcard with Generics

```java
public static void fx(List<? extends Dopamine> list) {
    for (Number n : list) {
        System.out.println(n);
    }
}
```

- Now method fx() will work with type `Dopamine` and its subtyhpes

