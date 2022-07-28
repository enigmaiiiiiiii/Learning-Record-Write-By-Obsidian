# 接口特性

- 接口不能实例化
- 可以声明接口变量, 接口变量可以引用实现了接口的对象
- 一个类可以实现多个接口，多个接口之间用逗号隔开
- 接口通过default关键字提供方法默认实现
- 可以包含[抽象方法](), [默认方法](), [静态方法]()
- 可以包含[常量声明], 接口中field声明默认public, static, final
- [instanceof](Java_Instanceof_Operator.md) 可以用于检查某个类是否实现了某个接口

## 接口中的default方法

- 实现接口的类可以不重新实现接口中的默认方法
- 继承含有默认方法的接口时, 有三种处理方式
  - 不做任何处理，直接继承默认方法
  - 重新声明为抽象方法
  - 重新定义默认方法

## 方法冲突解决规则

### 冲突1

- 冲突条件
  - 类继承了两个接口
  - 两个接口提供的相同方法均提供了默认实现
- 解决方法
  - 在类中重写接口中的方法

### 冲突2

- 冲突条件
  - 类继承了一个接口和一个超类
  - 接口提供的方法提供了default实现
- 解决方法
  - 类只会考虑超类的方法，不会考虑接口的方法, 即"类优先"

> 由于类优先法则, 不要让默认方法重新定义Object中的方法
