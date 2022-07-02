# Q-Pointer

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

widget_p.h

```c++
struct WidgetPrivate
{
    // Constructor that initializes the q-ptr
    WidgetPrivate(Widget *q) : q_ptr(q) { }
    Widget *q_ptr; // q-ptr points to the API class
    Rect geometry;
    String stylesheet;
};
```

widget.cpp

```c++
#include "widget_p.h"
// Create private data.
// Pass the 'this' pointer to initialize the q-ptr
Widget::Widget() : d_ptr(new WidgetPrivate(this))
{
}

Rect Widget::geometry() const
{
    // the d-ptr is only accessed in the library code
    return d_ptr->geometry;
}
```

## child class

label.h

```c++
class Label : public Widget
{
    // ...
    String text() const;

private:
    LabelPrivate *d_ptr;
};
```

label.cpp

```c++
// Unlike WidgetPrivate, the author decided LabelPrivate
// to be defined in the source file itself
struct LabelPrivate
{
    LabelPrivate(Label *q) : q_ptr(q) { }
    Label *q_ptr;
    String text;
};

Label::Label() : d_ptr(new LabelPrivate(this))
{
}

String Label::text()
{
    return d_ptr->text;
}
```