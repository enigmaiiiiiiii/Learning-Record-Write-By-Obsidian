# 枚举器和迭代器

- 用于`foreach(Type VarName in EnumerableObject)`, Enumerabler必须是可枚举类型

## IEnumerator接口

- <font color="red">实现IEnumerator接口的类型称为可枚举类型
- 包含3个函数成员: Current, MoveNext, Reset
- Current
- MoveNext
  - 返回bool值，表示新位置是否已超过序列尾部
  - 原始位置在第一项之前，也意味着必须在current之前调用
- Reset: 重置为原始状态

## IEnumerable接口, 枚举器

- <font color="red">只有一个成员GetEnumerator, 返回IEnumerator接口的方法称为枚举器</font>

## 泛型IEnumerator和IEnumerable接口

- 非泛型版本返回object的引用，需要转化为实际类型, 不是类型安全的
- `IEnumerator<T>`和`IEnumerable<T>`是类型安全的

## 迭代器, 迭代器

- 迭代器返回`IEnumrator<T>`
- 通过yield实现 
- 不限制方法名
