# D-pointer优化

在上面的代码中，创建一个Label会导致为LabelPrivate和WidgetPrivate分配内存。如果我们在Qt中采用这种策略，情况会变得更糟，比如QListWidget类——它在类继承层次中有6层，这将导致最多分配6个内存!

这个问题可以通过私有类的继承层次结构来解决，并通过d指针将类实例化。

注意，在继承d-pointer时，私有类的声明必须在一个单独的文件中，例如widget_p.h。不再可能在widget.cpp文件中声明它

## baseClass

widget.h : 

- 公有类中包含指向私有类的指针
- d_ptr: 公有类中成员，指向私有对象的指针
- d_ptr: 派生类可以调用的构造函数

```c++
class Widget
{
public:
    Widget();
    // ...
protected:
    // only subclasses may access the below
    // allow subclasses to initialize with their own concrete Private
    Widget(WidgetPrivate &d);
    WidgetPrivate *d_ptr;
};
```

widget_p.h: 

- 私有类中包含指向公有类的指针
- q_ptr : 私有类成员,  指向公有对象的指针
- q_ptr : 在构造函数，通过Widget*初始化

```c++
struct WidgetPrivate
{
    WidgetPrivate(Widget *q) : q_ptr(q) { } // constructor that initializes the q-ptr
    Widget *q_ptr; // q-ptr that points to the API class
    Rect geometry;
    String stylesheet;
};
```

widget.cpp

- 初始化d_ptr

```c++
Widget::Widget() : d_ptr(new WidgetPrivate(this))  
{
}

Widget::Widget(WidgetPrivate &d) : d_ptr(&d)
{
}
```

## childClass

label.h

```c++
class Label : public Widget
{
public:
    Label();
    // ...
protected:
    Label(LabelPrivate &d); // allow Label subclasses to pass on their Private
    // notice how Label does not have a d_ptr! It just uses Widget's d_ptr.
};
```

label.cpp

```c++
#include "widget_p.h"

class LabelPrivate : public WidgetPrivate
{
public:
    String text;
};

Label::Label()
 : Widget(*new LabelPrivate) // 用label的Private初始化d指针
{
}

Label::Label(LabelPrivate &d) : Widget(d)
{
}
```