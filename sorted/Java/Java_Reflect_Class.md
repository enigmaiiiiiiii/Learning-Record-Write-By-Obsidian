# java.lang.Class

- [Introduction](#introduction)
- [获得Class实例](#获得class实例)
- [方法](#方法)

## Introduction

- Class类的对象表示某个类的属性
- 相同元素类型的数组共享一个Class对象

虚拟机为每个类型管理一个Class对象

```java
System.out.println(e.getClass() == Employee.class); // true
```

- `e` is an instance of Employee

## Get Class Instance

```java
package com.example.code;

public class Demo {
    public static void main(String[] args) {

        Demo demo = new Demo();

        Class<?> c1 = Employee.class;
        Class<?> c2 = demo.getClass();
        Class<?> c3 = Class.forName("com.example.code.Employee");

        System.out.println(c1 == c2)
        System.out.println(c2 == c3)
    }
}
```

`classinstance.getClass()`

- 通过实例

`class_name.class`

- 通过类型名称的class property

`Class.forName("classname")`

- 通过描述类的字符串, 如"java.util.Random"
- classname的语法由Class.getName()描述

> 不能用于原始类型

使用TYPE字段获得基本类型和void类型的Class实例

- 通过基本类型的包装类型，如`Class c = Double.TYPE;`


## 通过Class创建对象

`newInstance()`

```java
String s = "java.util.Random";
Object m = Class.forName(s).newInstance();
```

- m is an instance of `java.util.Random`

## Method

Access to Field

- `Field[] getFields()`: get public fields
  - **exclude primitive type, void**
  - include inherited fields
- `Field[] getDeclaredFields()`: get all fields
  - **exclude primitive type, void**
  - include inherited fields

Access to Method

- `Method[] getMethods()`
- `Method[] getDeclaredMethods()`

Modifier

- `int getModifiers()`

Constructor

- `getConstructors()`

ClassLoader

- `public ClassLoader getClassLoader()`: 返回Class类的[类加载器](Java_JVM_Class_ClassLoader.md)

创建实例

- `getDeclaredConstructor(Class<?>... parameterTypes).newInstance()`
  - 按类的构造函数的参数类型和顺序创建实例
- `newInstance()`: 创建实例

定位

> `.`: 当前目录, `/`: 根目录

- `URL getResource(String name)`: 查找与**调用该方法的类**相关指定资源
  - 如果class在一个[命名Module]中, 则通过调用Class loader的getResource()方法
  - 如果class在一个[非命名Module]中, Class Object被bootstrap class loader加载, 该方法调用ClassLoader.getSystemResource(Java.lang.String)
- getResourceAsStream(String name)
  - 如果name以`/`开始, 则资源的绝对路径名是`/`后面的部分

## Get Class from Inner Class

`foo.getClasses()`:

```java
public class Outer {
    public class Inner {}
    public static void main(String[] args) {
        Class<?>[] classes = Outer.class.getClasses();
        for (Class<?> c : classes) {
            System.out.println(c.getName());
        }
    }
}
```

- 返回`Class<?>[]`, 元素为Inner Class 实例

`foo.getDeclaredClasses()`

- 返回Class实例声明的类, 接口
- 包括声明为private的类

`foo.getDeclaringClass()`

- 返回Class实例的外部类

```java
package com.example.code;
public class Outer {
    public class Inner {}
    public static void main(String[] args) {
        Class<?> c = Inner.class.getDeclaringClass();
        System.out.println(c.getName());
    }
}
```

output:

```
com.example.code.Outer
```

classinstance.getEnclosingClass(): 返回Class实例的外部类

- 如果Class实例是匿名类, 则返回null
- 如果Class实例是静态内部类, 则返回null
- 如果Class实例是外部类, 则返回外部类
