# Differences between String-Based and Functor-Based Connections

```c++
auto slider = new QSlider(this);
auto doubleSpinBox = new QDoubleSpinBox(this);
```

- Functor-Based

```c++
// OK: The compiler can convert an int into a double
connect(slider, &QSlider::valueChanged,
        doubleSpinBox, &QDoubleSpinBox::setValue);
```

- string-Based

```c++
// ERROR: The string table doesn't contain conversion information
connect(slider, SIGNAL(valueChanged(int)),
        doubleSpinBox, SLOT(setValue(double)));
```

||||
|:--|:--:|:--:|
||string-based|functor-based|
|完成类型检查的阶段|运行时检查|编译时检查|
|隐式类型转换|N|Y|
|能否连接lambda表达式|N|Y|
|能否建立槽函数参数多于信号参数的连接|Y|N|
|都否建立c++函数到QML函数的连接|Y|N|

## 类型转换

## 连接lambda

## 连接QML对象