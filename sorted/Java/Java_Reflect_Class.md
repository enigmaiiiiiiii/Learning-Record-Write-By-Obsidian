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
- `public Class forName(String className)`: 返回Class类的对象，参数ClassName是类的完全限定名(包括所在包，和类名), 如packagename.DemoClass 

