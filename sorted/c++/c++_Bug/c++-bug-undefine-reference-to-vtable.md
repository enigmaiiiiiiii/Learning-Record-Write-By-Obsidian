# undifined reference to "vtable for aClass"

- 非纯[虚函数](c++-virtual-function.md)必须被定义

发生在Qt中的具体问题

> 通常不会在Qt项目中定义class

在main.cpp中定义一个class, 并加Q_Object宏

```c++
class CustomButton: public QPushButton
{
    Q_OBJECT
public:
    CustomButton(QWidget *parent = nullptr); 
private slots:
    void onButtonClicked(bool arg);
};
```

报错:undifined reference to 'vtable for CustomButton'

## 分析

- Qt的MOC编译器编译的是有Q_OBJECT的头文件