# Object类

- 所有类的超类
- Object类型变量可以引用任何类型对象
- 对具体类型进行操作，需要转换为相应类型

```java
Object obj = new Employee("Harry Hacker", 39000);
Employee e = (Employee)obj;
```

[equals()方法](java-object-class-equals-method.md)

[hashCode()方法](java-object-class-hashcode-method.md)

[toString()方法](java-object-class-tostring-method.md)

## Objects类

> 扩展了Object类的功能

- 由静态实用方法组成, 用于进行Object对象操作, 如计算hashCode, 进行equals比较, 进行toString转换
- Objects.equals(Object o1, Object o2): 该方法等价于执行o1.equals(o2)