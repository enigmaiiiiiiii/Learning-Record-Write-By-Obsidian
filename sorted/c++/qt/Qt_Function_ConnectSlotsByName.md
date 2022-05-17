# connectionSlotsByName()函数

```c++
void QMetaObject::connectSlotsByName(QObject* object)
```

- connectSlotsByName递归搜索object的所有子对象,
- 按规则将子对象中的信号关联到object的槽

槽函数的命名规则

```
private slots:
  void on_<object name>_<signal name>(<signal parameters>);
```