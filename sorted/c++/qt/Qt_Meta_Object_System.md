# 元对象

> [关联知识：C#反射](CSharp_Reflection.md)

[属性系统](Qt_Property_System.md)

[QObject宏](Qt_QObject_Macros.md)

[MOC编译器](Qt_Meta_Object_Compiler.md)

```c++
class Counter : public QObject
{
    Q_OBJECT  // 启用元特性

public:
    Counter() { m_value = 0; }

    int value() const { return m_value; }

public slots:
    void setValue(int value);

signals:
    void valueChanged(int newValue);

private:
    int m_value;
};
```

- 元对象提供了插槽机制, 信号，运行时类型信息和动态属性系统

## 元对象系统基于三点

- QObject类为使用元系统的类的基类
- 类的私有部分中的Q_OBJECT宏用于启用元对象特性
- 元对象编译器(moc)提供了实现Meto-Object特性的代码
  - 读取c++头文件，发现Q_OBJECT宏后，生成另一个c++源文件
  - 可以用`#include'd`包含生成的c++源文件

## 静态方法

- `QObject::metaObject()`: 返回与类相关的元对象。
- `QMetaObject::className()`: 在运行时以字符串的形式返回类名，而不需要通过c++编译器提供本机运行时类型信息(RTTI)支持。
- `QObject::inherits()`: 函数返回一个对象是否是一个类的实例，这个类在QObject继承树中继承了一个指定的类。
- `QObject::tr()` 和 `QObject::trUtf8()`转换字符串以实现国际化。
- `QObject::setProperty()`和`QObject::property()`根据名称动态设置和获取属性。
- `QMetaObject::newInstance()`构造一个类的新实例

## 如果没有在类中使用Q_OBJECT宏

- 则该类没有元对象的特性

> 如子类没有Q_OBJECT宏，则QMetaObject::className()不会返回类的实际名称，而是返回父类名称。

- 官方建议所有QObject的子类都使用O_OBJECT宏
