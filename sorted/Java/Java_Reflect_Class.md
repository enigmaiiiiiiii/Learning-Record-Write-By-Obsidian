# Class类

- Class类的对象表示某个类的属性
- 相同元素类型的数组共享一个Class对象

虚拟机为每个类型管理一个Class对象

```java
if (e.getClass() == Employee.class) 
```

newInstance()方法可以动态创建实例

```java
String s = "java.util.Random";
Object m = Class.forName(s).newInstance();
```

## 获得Class实例

- 通过实例:  classinstance.getClass()
- 通过类名称: classname.class: 类名称
- 通过字符串: Class.forName("classname")
  - 不能用于原始类型
  - classname的语法由Class.getName()描述
- 使用TYPE字段获得基本类型和void类型的Class实例
  - 通过基本类型的包装类型，如`Class c = Double.TYPE;`

获得多个Class类实例

- classinstance.getClasses(): 返回由Class实例中声明的public类,接口,枚举, 包括继承的member(声明的**public类**, 接口, 枚举)
- classinstance.getDeclaredClassed(): 返回Class实例声明的类, 接口
  - 包括声明为private的类
- classinstance.getEnclosingClass(): 返回Class实例的外部类
  - 如果Class实例是匿名类, 则返回null
  - 如果Class实例是静态内部类, 则返回null
  - 如果Class实例是外部类, 则返回外部类

## 方法

- `getFields()`
- `getDeclaredFields()`
- `getMethods()`
- `getDeclaredMethods()`
- `getConstructors()`
- `public ClassLoader getClassLoader()`: 返回Class类的[类加载器](Java_JVM_Class_ClassLoader.md)

创建实例

- `getDeclaredConstructor(Class<?>... parameterTypes).newInstance()`
  - 按类的构造函数的参数类型和顺序创建实例
- `newInstance()`: 创建实例

定位

- `URL getResource(String name)`: 查找与**调用该方法的类**相关指定资源
  - 如果class在一个[命名Module]中, 则通过调用Class loader的getResource()方法
  - 如果class在一个[非命名Module]中, Class Object被bootstrap class loader加载, 该方法调用ClassLoader.getSystemResource(Java.lang.String)
- getResourceAsStream(String name)
  - 如果name以`/`开始, 则资源的绝对路径名是`/`后面的部分
