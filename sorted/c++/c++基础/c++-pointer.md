# Pointer

- Pointer store the **address** of an object
- type of a Pointer is `Foo*`
- 属于复合类型
- value of a pointer
  - point to an object
  - 指向紧邻对象所占空间的下一个位置
  - empty pointer，literal value is `nullptr`
  - 无效指针
  > 对于第二种和第三种，其使用受到限制，这些指针没有指向具体对象，试图访问这类指针的行为是不被允许的
- 解引用符*