# Q_D and Q_Q

## 使用基类成员访问派生类

> 需要转换

```c++
void Label::setText(const String &text)
{
   // won't work! since d_ptr is of type WidgetPrivate even though
   // it points to LabelPrivate object
   d_ptr->text = text;  // 错误
}
```

d_ptr在Widget, 是Widget的指针, 因此需要先转为子类指针

```c++
LabelPrivate *d = static_cast<LabelPrivate*>(d_ptr);
```

## 公有类，私有类指针互相访问

> 需要Q_D和Q_Q

对于Q_D，您可以使用Label中的LabelPrivate成员

```c++
// With Q_D you can use the members of LabelPrivate from Label
void Label::setText(const String &text)
{
    Q_D(Label);
    d->text = text;  //
}
```

通过Q_Q，您可以使用来自LabelPrivate的Label成员

```c++
// With Q_Q you can use the members of Label from LabelPrivate
void LabelPrivate::someHelperFunction()
{
    Q_Q(Label);
    q->selectAll();
}
```

global.h

```c++
#define Q_D(Class) Class##Private * const d = d_func()
#define Q_Q(Class) Class * const q = q_func()
```

d_func将d_ptr转为派生类私有指针，命名为d

![label](qt-d-pointer-optimization.md#baseclass)

