# Java Modifier

## Introduction

- Modifier is reflected to int
- Modifier list
  - `public`
  - `protected`
  - `private`
  - `abstract`
  - `static`
  - `final`
  - `sealed`
  - `non-sealed`
  - `strictfp`

converts int to string represent the modifier

- use static Method `Modifier.toString()`

```java
public class Demo {
  private Date date;
  public static void main(String[] args) {
    Class<?> cls = Demo.class;
    Field[] fl = cls.getDeclaredFields();
    for (Field f : fl) {
      System.out.println(Modifier.toString(f.getModifiers()) + " " + f.getType().getName() + " " + f.getName());
    }
}
```

```java
private
```

## get Modifier

- foo.getModifiers(): 返回int, 表示Class实例的修饰符

> foo is instance of Class, Field, Method
> 静态方法: Modifier.toString()将代表Modifier的整数转为字符串;
