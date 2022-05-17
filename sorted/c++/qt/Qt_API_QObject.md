# Object

## connect

```c++
QMetaObject::Connection QObject::connect(const QObject *sender, 
                                         const char *signal, 
                                         const QObject *receiver, 
                                         const char *method, 
                                         Qt::ConnectionType type = Qt::AutoConnection)
```

- 将sender中的method作为信号, reveiver中的method为信号或插槽
- 参数
  - signal: SIGNAL(method(type))
  - method: 信号或插槽
    - 插槽: SLOT(method(type))
    - 信号: SIGNAL(method(type))

```c++
QLabel *label = new QLabel;
QScrollBar *scrollBar = new QScrollBar;
QObject::connect(scrollBar, SIGNAL(valueChanged(int)), 
                 label, SLOT(setNum(int)));
```

## qobject_cast

```c++
template <typename T> T qobject_cast(QObject *object)
template <typename T> T qobject_cast(const QObject *object)
```

- 如果objecjt是T类型或T的子类, 返回要转换的类型T, 否则返回nullptr
- 类型T必须继承自QObject，且包含Q_OBJECT声明

行为类似c++中的[dynamic_cast()](c++_Convert_Type.md)

