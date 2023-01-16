# connection函数

- 返回值均为QMetaObject::Connection, 称为<font color="red">连接的句柄</font>
- 一个函数可以连接到一个给定的信号, 
  - 信号参数个数至少与插槽函数参数个数一样多
- 一个functor可以连接到一个信号 
  - 如果它们有完全相同数量的参数
  - 信号和槽中对应参数的类型之间必须存在隐式转换

## 信号参数

> 信号必须声明为信号的函数
  
- SIGNAL宏
- QMetaMethod
- 成员函数指针
  
## 槽参数

> 槽函数可以是与信号相连的任意函数或functor
  
- SLOT宏 
- QMetaMethod
- 成员函数指针
- [functor](cpp-callable-type.md)

## 连接方式参数

- Qt::AutoConnection
- Qt::DirectConnection
- Qt::QueuedConnection
- Qt::BlockintQueuedConnection

## 函数重载版本

- 以SIGNAL()和SLOT()宏作为信号和槽参数

```c++
QMetaObject::Connection 
QObject::connect(const QObject *sender, 
                 const char *signal, 
                 const QObject *receiver, 
                 const char *method, 
                 Qt::ConnectionType type = Qt::AutoConnection

```

```c++
connect(sender, SIGNAL(signal(int)), receiver, SLOT(slot(int))
```


- 以Meta成员函数指针作为参数

```c++
QMetaObject::Connection 
QObject::connect(const QObject *sender, 
                 const QMetaMethod &signal, 
                 const QObject *receiver, 
                 const QMetaMethod &method,
                 Qt::ConnectionType type = Qt::AutoConnection)

```

```c++
connect(lineEdit, &QLineEdit::textChanged, this, &widget::on_textChanged);
```

> `&QLineEdit::textChanged` 和 `&widget::on_textChanged`是[元对象成员](Qt_Meta_Object_System.md), 也是[成员函数指针](c++_Class_Member_Function_Pointer.md)

- 没有receiver参数版本

receiver为this

```c++
QMetaObject::Connection 
QObject::connect(const QObject *sender, 
                 const char *signal,
                 const char *method, 
                 Qt::ConnectionType type = Qt::AutoConnection) const
```

等价于：

```c++
connect(_sender_, _signal_, this, _method_, _type_).
```

## 泛型版本

```c++
template <typename PointerToMemberFunction> 
QMetaObject::Connection 
QObject::connect(const QObject *sender, 
                 PointerToMemberFunction signal, 
                 const QObject *receiver,
                 PointerToMemberFunction method, 
                 Qt::ConnectionType type = Qt::AutoConnection)
```

```c++
template <typename PointerToMemberFunction, typename Functor>
QMetaObject::Connection 
QObject::connect(const QObject *sender,
                 PointerToMemberFunction signal, 
                 Functor functor)
```

```c++
template <typename PointerToMemberFunction, typename Functor>
QMetaObject::Connection 
QObject::connect(const QObject *sender, 
                 PointerToMemberFunction signal, 
                 const QObject *context, 
                 Functor functor, 
                 Qt::ConnectionType type = Qt::AutoConnection)
```