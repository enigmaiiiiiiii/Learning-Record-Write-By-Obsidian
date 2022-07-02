# 对话框

- 与窗口的外观区别在于没有最大最小化按钮
- 对话框always是一个top-level窗口
- 分为Modal和非Modal
- 总是位于父部件中心

```c++
QDialog::QDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags())
```

- f : 传递个QWidget构造函数的参数
  
> 比如 what's This 按钮, 可以通过传递标志Qt::WindowTitleHint | Qt::WindowSystemMenuHint 

```c++
enum Qt::WindowType
{
    Qt::SubWindow  // 
}
```
