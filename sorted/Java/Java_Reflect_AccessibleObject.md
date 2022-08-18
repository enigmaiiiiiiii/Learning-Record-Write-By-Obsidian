# AccessibleObject

- Field类, Method类, Constructor类的基类

## Field: 域

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

## Method类, 对象方法的抽象类

- getReturnType()
- getModifiers()
- getParameterTypes()
- invoke(Object obj, Object... args): 调用method抽象对象表示的方法
  - obj: 调用方法的对象
  - args: 调用方法的参数, 参数类型为**Object[]**

获得Method类

- Classinstance.getMethod(String name, Class... parameterTypes)
  - name: 方法名称
  - parameterTypes: 方法参数类型列表

### 调用任意方法

## Constructor: 构造器
