## base class

widget.h

```c++
class WidgetPrivate;

class Widget
{
    // ...
    Rect geometry() const;
    // ... 

private:
    WidgetPrivate *d_ptr;
};
```

widget_p.h, 类的私有头文件

```c++
/* widget_p.h (_p means private) */
struct WidgetPrivate
{
    Rect geometry;
    String stylesheet;
};
```

widget.cpp

```c++
#include "widget_p.h"

Widget::Widget() : d_ptr(new WidgetPrivate)
{
    // Creation of private data
}

Rect Widget::geometry() const
{
    // The d-ptr is only accessed in the library code
    return d_ptr->geometry;
}
```

## child class

label.h

```c++
class Label : public Widget
{
    string text();
private:
    LabelPrivate *d_ptr;
}
```

label.cpp

```c++
struct LabelPrivate
{
    String text;
};

Label::Label() : d_ptr(new LabelPrivate)
{
}

String Label::text()
{
    return d_ptr->text;
}
```

WidgetLib在每一次发布都被重新编译，私有的类可以随意的改变而不会对 CuteApp 带来影响。