# final

- 修饰类: 类不能被继承
- 修饰方法: 方法不能被override
- 修饰变量
  - 变量前加final关键字， 表示这个变量只能被赋值一次
  - 表示构造器被执行后，这个字段必须被设置，且不能在对其进行修改
  - 大多用于修饰基本类型或不可变类型
  - 修饰可变类时
    - final关键字表示字段中的[对象引用]不会再指向其它对象 
    - 对象内容可以修改

```java
public void giveGoldStar() {
    evaluations.append(LocalDate.now() + ": Gold star!\n");  // 对象内容被改变
}
private final StringBuilder evaluations;
```

- 修饰参数

## effectively final 

