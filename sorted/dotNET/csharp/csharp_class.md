# 类

[属性](CSharp_Class_Properties.md)

[静态字段](csharp_class_static_field.md.md)

[继承体系](Csharp_Inheritance_System.md)

[构造函数](csharp_class_constructor.md)

[修饰符](csharp_修饰符.md)

## 类的实例

- new关键字创建类的实例，实例在堆中有独立的内存
- 使用非静态方法，字段，属性前，必须先创建对象实例

## 静态成员与常量成员

- 静态成员和常量成员都对每个实例都可见, 没有类的实例也可以使用
- 常量没有自己的存储位置, 而是被编译器直接替换，类似C++中的[\#define](c++_preprocess.md)