# boxing与Unboxing

## boxing

- 将任何值类型转换为
  - object类型
  - System.ValueType
- 是一种隐式转换
- 将值类型转换为引用类型
  - 在堆中创建int类型对象
  - 复制i的值到这个对象
  - 把int对象的[引用](csharp-value-reference.md)返回给object对象
- boxing创建对象副本

## unboxing

- 将装箱的值转换为原始类型
- 是一种显示转换