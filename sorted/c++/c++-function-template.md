# C++ - Function Template

- `template <typename T> int compare(const T &v1, const T &v2) {}`
- 调用模板函数时，编译器通过实参类型推断T的类型
- 类型参数前使用关键字classname或typename
- 非类型参数, 用来传递一个值，值必须是[常量表达式]
- 编写泛型代码的两个重要原则
  - 模板中的参数是const的引用
    - 为了保证函数可以用于不能拷贝的类型
  - 函数体中的条件判断仅使用<比较运算
    - 降低函数对处理类型的要求，这些类型必须支持`<`,而不必支持`>`
