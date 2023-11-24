# UML - Type Diagram

## Class diagram

**class name** at the top of the box

```
+---------------------+
|       Person        |
+---------------------+
|  propA: string      |
|  propB: int         |
+---------------------+
|  foo()              |
|  bar()              |
+---------------------+
```

Interface Diagram

```
+---------------------+
|    <<interface>>    |
|     IDisposable     |
+---------------------+
|  foo()              |
|  bar()              |
+---------------------+
```

Enum Diagram

```
+---------------------+
|      <<enum>>       |
|       Color         |
+---------------------+
|  Red                |
|  Green              |
|  Blue               |
+---------------------+
```

## Field Diagram

- The properties format

```sh
-name: string
-age: int
+id: int
```

- private is `-`
- public is `+`
- protected is `#` (protected means it can only be accessed by the same class or subclasses)


## Method Diagram

Method Down part of class is methods (functions of the class)

```sh
-setName()
-doSomething()
+isActive
```

- access modifier is same as properties

## Mark As Static Field Or Method

static field or method is underlined

> <u>propA</u>

or use `<<static>>` mark

```
+-------------------------------+
|+propA: string      <<static>> |
+-------------------------------+
```

## Mark As Property

```
+-------------------------------+
|+propA: string    <<property>> |
+-------------------------------+
```


