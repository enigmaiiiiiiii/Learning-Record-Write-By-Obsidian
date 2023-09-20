# C++ - const

## const Object

- `const` object can not be modified after created, so `const` object **must be initialized**
- initial value can be any complex expression
- with `extern` keyword, `const` object can be defined in one file and declared in other files
- `const` identifier can not be used on function

## const expression

[const expression](c++-const-expression.md)

## Const reference

[const reference](c++-const-reference.md)

## Pointer And Const

[pointer and const](c++-const-and-pointer.md)

## 顶层const和底层const

> 区分顶层const和底层const的问题:**指针本身是不是常量和指针所指是不是常量的问题**

- **顶层const**：
  - 可以是任意对象的常量
  - <font color="red">指针本身是个常量</font>
  - `const int a = i;`中的const是一个顶层const
- **底层const**：
  - 一般是复合类型
  - <font color="red">指针所指可以是常量，也可以是普通对象</font>
  - 指针和引用类型的const，可以通过修改指向的对象或引用对象的值被改变
  - ```const int &a = i;``` 中的const是一个底层const
  
## keywords

[mutable](c++-keyword-mutable.md)


