# Interface Annotation

- 所有注释接口的superinterface

## 获得Annotation对象

```java
<T extend Annotation> T getAnnotation(Class<T> annotationType)
```

- 获得给定类型的Annotation实例
- 参数类型: Class类实例, 如annotationname.class

```java
<T extends Annotation> T[] getAnnotationsByType(Class<T> annotationType)
```

- 获得可重复Annotation类型的所有实例

```java
Annotation[] getAnnotations()
```

- 返回包含作用于该对象的所有Annotations实例的数组

```java
Annotation[] getDeclaredAnnotations()
```

- 返回包含作用于该对象的所有Annotations实例的数组, 不包含继承而来的annotations

## 方法

- boolean equals(Object obj)
- int hashCode()
- String toString()
