# 自定义类

hellodlg.h

```c++
#ifndef HELLODIALOG_H
#define HELLODIALOG_H
#include <QDialog>
namespace Ui 
{
    class HelloDlg;
}

class HelloDlg:public QDialog
{
Q_OBJECT
public:
    explicit HelloDlg(QWidget parent =0);
    ~HelloDialog();
private:
    Ui::HelloDlg ui;
}
#endif /HELLODIALOG H
```

hellodlg.cpp

```c++
#include "hellodlg.h"
#include "ui_hellodlg.h"  // hellodlg的ui文件

HelloDlg::HelloDlg(QWidget *parent)
    : QDialog(parent)
{
    ui = new Ui::HelloDialog;
    ui->setupUi(this);
}
HelloDlg::~HelloDlg()
{
    delete ui;
}
```