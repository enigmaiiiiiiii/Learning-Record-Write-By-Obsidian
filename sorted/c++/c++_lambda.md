# lambda表达式

#callable #可调用类型 #lambda

- 是一个可调用的代码单元
- 表达式样式`[capture list](parameter list) -> return type {function body}`
- 适合使用次数不多，临时使用
- capture list: 捕获局部变量列表，可为空，且通常为空
  - 值捕获:`[var](){}`; 隐式值捕获:`[=](){}`
  - 引用捕获：`[&var](){}`; 隐式引用捕获:`[&](){}`
  - 隐式捕获
    - 让编译器判断要使用的变量
    - `[=]`,引用隐式捕获
    - `[&]`,值引用捕获
    - 隐式显式混合使用时，第一个元素必须表示隐式捕获类型，且显式捕获类型不能和隐式相同
  - 尽量减少捕获数据量
  - 对于值捕获，参数列表后加mutable，可改变捕获列表变量值
- `parameter list`: 参数列表, 可为空
- `-> return type`: 返回类型, 可为空
  - 如果function body包含return之外的语句，则编译器默认返回void,编译器推断不出返回类型
- function body：函数体
- 必须使用[尾置返回类型](c++_funtion_return_type.md#尾置返回类型)来指定返回类型
- 参数传递:不能有默认参数

```c++
auto f = [] () {return 42;}; 
/// 定义了一个可调用对象f, 命名lambda
```