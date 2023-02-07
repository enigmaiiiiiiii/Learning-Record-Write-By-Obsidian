# toString()方法

- Object对象中用于返回表示对象值的字符串
- 大多数toString格式为`类名[field1=val1, field2=val2]`
- 任意对象调用`System.out.println(x)`会调用x的`toString()`方法

```java
public String toString()
{
    return getClass().getName() + 
        "[name=" + name +
        ",salary=" + salary +
        ",hireDay=" hireDay +
        "]";
}
```
子类中的toString

```java
public String toString()
{
    return super.toString() + 
        "[bonus=" + bonus +
        "]";
}
```

> 调用toString()的地方可以用`"" + x`替代

- Arrays(数组)没有覆盖object类的toString方法
- Arrays类的静态方法可以打印数组内容
