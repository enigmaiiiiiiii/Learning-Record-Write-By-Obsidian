# ui文件

## .ui文件

> 窗体界面文件

- XML文件
- 创建项目时自动生成
- 存储了窗体上各个组件的属性设置和布局

## ui_xxx.h文件


- ui编译器(uic)编译xxx.ui文件后生成的文件

ui_xxx.h
```c++
QT_BEGIN_namespace
class Ui_XXX
{
public:
    void setupUi(QWidget *Widget) {}
    void retranslateUi(QWidget *Widget) {}
}
```

- setupUi(): 以c++的方式创建各组件
  - 创建组件
  - 设置属性
  - 调用connect()函数，关联信号和槽
- retranslateUi(): 将Ui中的文本内容翻译为多种语言


## ui文件编译器

- UIC, User Interface Compiler
- 编译ui文件，生成.h文件

```shell
<uic compiler path>\uic -o ui_foo.h foo.ui
```
