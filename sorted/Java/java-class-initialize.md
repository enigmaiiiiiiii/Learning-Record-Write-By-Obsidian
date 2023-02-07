# 初始化

## Constructor

[构造器](java-class-constructor.md)

## Field

[字段初始化](java-class-field-initialize.md)

## 调用构造器时处理步骤

1. 所有数据初始化为默认值(0, false或null)
2. 按照在类声明中出现的次序，依次执行所有[字段初始化语句和初始化块](java-class-field-initialize.md)
3. 调用第一行调用的另一个构造器
4. 执行构造器主体