# Field

## Introduction

`getType()`: 类型

`getName()`: 名称

`public Object get(Object obj)`: 

- 返回对象obj中表示字段的值; 
- 原始值在返回之前被包装在适当的[Object]()中
- 异常
  - IllegalAccessException: 不可访问
  - IllegalArgumentException: 对象与声明field的类或接口不一致
  - NullPointerException: obj对象为空
  - ExceptionInInitializerError: ?

```java
Employee harry = new Employee("Harry Hacker", 35000, 10, 1, 1989);
Class cl = harry.getClass();
Field f = cl.getDeclaredField("name");
Object v = f.get(harry);  // name为private, 抛出异常
```

`setAccessible(boolean flag)`

- 设置此反射的field对象的可访问标志
