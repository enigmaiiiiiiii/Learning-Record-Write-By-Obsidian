# CSharp - Class

[Property](csharp-class-properties.md)

[Static Field](csharp-class-static-field.md.md)

[Inheritance](csharp-inheritance-system.md)

[Constructor](csharp-class-constructor.md)

[Identifier](csharp-identifier.md)

## Instance of Class

- new关键字创建类的实例，实例在堆中有独立的内存
- 使用非静态方法，字段，属性前，必须先创建对象实例

## Static Member and Constant Member

- 静态成员和常量成员都对每个实例都可见, 没有类的实例也可以使用
- 常量没有自己的存储位置, 而是被编译器直接替换，类似C++中的[\#define](c++-preprocess.md)
