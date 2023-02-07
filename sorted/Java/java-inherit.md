# 继承

[扩展Class](java-extend-class.md)

[实现Interface](java-implement-interface.md)

## 多态

> 在Java中, [编译期]允许子类数组引用转换超类引用而不需要强制转换; [运行时]，子类数组存储超类对象会引发ArrayStoreException

- 变量能**访问**的方法由[变量声明的类型](java-variable.md)的决定, 实现**对象类型**方法的访问需要[类型转换](java-type-convert.md)
- 变量**实际调用**的方法由**引用的对象类型**决定, 而不是**变量声明的类型**

## 类型转换

- 超类转子类前，应使用instanceof检查

## 抽象类

```java
public abstract class Person
{
    public abstract String getDescription();
}
```

- 抽象类不能被实例化, 可以声明抽象类变量
- 抽象类的[变量]()可以引用一个体系中子类对象

***

- 子类实现全部抽象方法，子类不再是抽象类
- 子类实现部分抽象类方法或不实现抽象类方法，子类也必须被标记为抽象类

## 继承设计技巧

1. 公共方法和field放在超类
2. 不要使用protected filed
  - 任何子类可访问protected field
  - 同一[package](java-package.md)可访问protected field
3. `is a`关系使用继承实现，避免滥用继承
4. 除非所有的方法都有意义，否则不要使用继承
5. 覆盖方法时不改变方法的内涵
6. 使用多态，而非类型信息

```
if (x is of type1) {
    action1(x);
}
else if (x is of type2) {
    action2(x);
}
```

> 如果action1, action2执行相同功能，应该定义一个方法放在超类或[接口](java-interface.md)中

7. 不要滥用反射