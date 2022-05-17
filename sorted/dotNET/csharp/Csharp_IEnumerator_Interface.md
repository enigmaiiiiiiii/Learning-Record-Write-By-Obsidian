# 枚举器

## IEnumerator接口

- <font color="red">实现IEnumerator接口的类型称为可枚举类型</font>
- 包含3个函数成员: Current, MoveNext, Reset
- Current
- MoveNext
  - 返回bool值，表示新位置是否已超过序列尾部
  - 原始位置在第一项之前，也意味着必须在current之前调用
- Reset: 重置为原始状态


## 泛型版本
