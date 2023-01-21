# Java Reflect Annotation

## Get Annotation Instance

get **specific annotation** by type

```java
foo.getAnnotation(Annotation.class)
```

- return `java.lang.annotation.Annotation`

```java
foo.getDeclaredAnnotation(Annotation.class)
```

- return `java.lang.annotation.Annotation`
- return null if not directly present

> foo is a Class, Field, Method or Constructor

Get **Annotation list**

```java
foo.getDeclaredAnnotations()
```

- return `java.lang.annotation.Annotation[]`

## judge if annotation is present

```java
foo.isAnnotationPresent(Annotation.class)
```
