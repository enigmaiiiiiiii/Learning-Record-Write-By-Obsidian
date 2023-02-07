# 信号和槽

[关联: C#事件](csharp-events.md)

- 实现对象间的通信
- 类的信号和槽机制由Q_OBJECT提供
- 信号和槽的外表之下是使用事件循环来传递消息的

## 信号

- 自定义信号
  - signals说明符
  - 必须是无返回值函数
  - 无需实现
- emit发射信号

自定义信号ageChanged(int)

```c++
class QPerson: public Qobject
{
private:
public:
signals:
  void ageChanged(int value);
}
```

发射自定义信号

```c++
void QPerson::incAge()
{
  m_age++;
  emit ageChanged(m_age);  // 发射
}
```

## 槽

- 自定义slot：通过slots说明符
- 函数体内使用`QObject::sender()`可以获得信号发射者的指针
- 槽函数的实参为信号发射时的实参

## 关联

- 一个信号可以关联多个槽
- 一个信号可以关联另一个信号
- 信号与槽的参数个数和类型需要一致，信号的参数不能少于槽的参数

## 关联方式

[connect()函数](qt-function-connect.md)

[connectSlotsByName()函数](qt-function-connectslotsbyname.md)

[Differences between String-Based and Functor-Based Connections](qt-signal-slot-connect-based.md)

## 使用第三方信号和槽机制

在CMake中添加语句

```cmake
target_compile_definitions(my_app PRIVATE QT_NO_KEYWORD)
```
