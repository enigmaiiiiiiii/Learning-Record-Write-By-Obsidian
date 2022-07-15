# 枚举类型

```java
enum Size {SMALL, MEDIUM, LARGE, EXTRA};
Size s = Size.MUDIUM; 
```

- 包含有限个命名值
- 定义一个类型，包含有限个实例
- 可以在其中添加一些构造器，方法或field

```java
public enum Size
{
    SMALL("S"), MEDIUM("M"), LARGE("L"), EXTRA_LARGE("XL");
    private String abbreviation;
    private Size(String abbreviation) {this.abbreviation = abbreviation;}
    public String getAbbreviation() {return abbreviation;}
}
```

- 所有枚举类型都是Enum类的子类
- toString()
  - 如`Size.SMALL.toString()`返回字符串`"SMALL"`
- valueOf()
  - 如`Size s = Enum.valueOf(Size.class, "SMALL");`: 表示将s设置成Size.SMALL
- values()
