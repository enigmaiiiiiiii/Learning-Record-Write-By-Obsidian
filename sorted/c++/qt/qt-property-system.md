# 属性系统

- 基于元对象系统，元对象系统也通过信号和插槽提供对象间的通信。
- 通过宏Q_PROPERTY()实现

```
Q_PROPERTY(QColor color READ color WRITE setColor NOtify colorChanged) 
Q_PROPERTY(qreal spacing MEMBER m_spacing NOTIFY spacingChanged)
Q_PROPERTY(QString text MEMBER m_text NOTIFY textChanged)
```

```
Q_PROPERTY(type name
           (READ getFunction [WRITE setFunction] |
            MEMBER memberName [(READ getFunction | WRITE setFunction)])
           [RESET resetFunction]
           [NOTIFY notifySignal]
           [REVISION int]
           [DESIGNABLE bool]
           [SCRIPTABLE bool]
           [STORED bool]
           [USER bool]
           [CONSTANT]
           [FINAL]
           [REQUIRED])
```

## 关键字参数

必须关键字

- READ: 指定一个读取属性值的[函数]，没有MEMBER关键字时必须设置READ。
- WRITE: 指定一个设定属性值的[函数]，只读属性没有WRITE设置。
- MEMBER: 指定一个成员变量与属性关联，成为可读可写的属性，无需再设置READ和WRITE

可选关键字

- RESET: 指定一个设置属性缺省值的函数。
- NOTIFY: 设置一个信号，当属性值变化时发射此信号。
- DESIGNABLE: 表示属性是否在Qt Designer里可见，缺省为true。
- CONSTANT: 表示属性值是一个常数，对于一个对象实例，READ指定的函数返回值是常数，但是每个实例的返回值可以不一样。
  - 具有CONSTANT关键字的属性不能有WRITE 和NOTIFY关键字。
- FNAL表示所定义的属性不能被子类重载

## 使用属性

- 无论是否定义了read,write接口函数都可以使用
  - QObject::property()读取属性
  - QObject::setProperty()设置属性
- QQbject::setProperty()可以设置一个新的属性  

## Q_CLASSINFO()

- 定义附加信息
- 获取信息: `QMetaClassInfo QMetaObject::classInfo(int index) const`
- QMetaClassInfo类有name()和value()返回附加信息的名称和值

