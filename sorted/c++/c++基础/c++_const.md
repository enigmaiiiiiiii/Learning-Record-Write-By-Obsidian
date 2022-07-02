# const限定符

## const对象

- *const*对象一旦创建后就不能再改变，所以const对象**必须初始化**
- 初始值可以是任意复杂的表达式
- *extern*关键字可在一个文件中定义*const*对象，而在其他多个文件中声明并使用
- 函数不能使用const限定符

## [常量表达式]

## [const引用](c++_Const_Reference.md)

## [指针和const](c++_Const_And_Pointer.md)

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
  
## 关键字  

[[关键字mutable]]