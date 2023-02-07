# 包装器

- 将基本类型包装成一个类
- 包装器类的对象的值是不可变得
- 包装器类是final, 不能被继承
- 包装器类是放置一些常用方法的地方, 如数字字符串转数值
- toBinaryString(): 转换为二进制时省略高位的0

## 自动装箱 与 拆箱

- 编译阶段执行

> valueOf()和intValue()

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(3);  // 相当于list.add(Interger.valueOf(3));
int n = list.get(3);  // 相当于list.get(3).intValue();
```

## 静态方法

- `Integer.toHexString(c)`: 将整数转换为十六进制字符串
