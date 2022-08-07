# 集合

- 元素是[引用类型](Java_Variable.md)
  - 集合中保存的是变量的值, 不是对象本身 
  - 基本类型存入集合会执行[装箱](Java_Boxer.md)转换


[通用接口](Java_Collection_Interface.md)

[具体实现](Java_Collection_Implementation.md)

## 方法

- contains(Object o): 如果集合包含指定的元素，则返回true

> 当且仅当该集合包含至少一个元素e，Objects.equals(o, e);
