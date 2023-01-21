# Java Generics

## take a look

```java
public class Generic<T> {
    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey() {
        return key;
    }

    // 静态泛型方法
    public static<K> K getGeneric(List<K> list) {
        return list.get(0);
    }

}
abstract class AbsThing<T> {

    // a generic method that take anything as parameter and return anything
    public abstract <T, K> T get(K entity);
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

- Type parameter **不需要**和所在类的 Type Parameter 相同
- 也**不需要声明在 Generic Class 中**
- 调用时Type Parameter 指定在**方法名左侧** or 省略

> Type Parameter 可以被推断

```java
public class Util {
    public static<T> boolean compare(T t1, T t2) {
        return t1.equals(t2);
    }

    public static void main(String[] args) {
        boolean resultA = Utils.<Integer>compare(1, 2);
        // omit type parameter
        boolean resultB = Utils.compare(1, 2);
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

Upper Bounded

- for you want to write a method that can work with `List<Box>`, `List<RedBox>`, `List<BlueBox>`, etc.

```java
public static void fx(List<? extends Box> list) {
    for (Box box : list) {
        System.out.println(box);
    }
}
```

- Now method fx() will work with type `Box` and its subtyhpes **at same time**

Lower Bounded

- for you want to write a method that can work with `List<Box>`, `List<Thing>`, `List<Object>`, etc.

> any other super type of `Box` will be accepted

```java
public static void addNumbers(List<? super Box> list) {
    for (Object o : list) {
        list.add(new Box());
    }
}
```