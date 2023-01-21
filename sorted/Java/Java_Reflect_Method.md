# Method类, 对象方法的抽象类

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
