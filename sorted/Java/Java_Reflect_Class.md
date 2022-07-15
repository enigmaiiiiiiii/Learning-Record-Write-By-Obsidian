# Class类

- Class类的对象表示某个类的属性

虚拟机为每个类型管理一个Class对象

```java
if (e.getClass() == Employee.class) 
```

newInstance()方法可以动态创建实例

```java
String s = "java.util.Random";
Object m = Class.forName(s).newInstance();
```

## 常用method

- getFields()
- getDeclaredFields()
- getMethods()
- getDeclaredMethods()
- getConstructors()
