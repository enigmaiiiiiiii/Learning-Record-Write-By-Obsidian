# QSS

- 适配widget的css
- QApplication::setStyleSheet()在整个应用程序上设置
- 语法和CSS一样

```css
QLineEdit { background: yellow }
QCheckBox { color: red }
```

## 选择器

- 全局选择器: `*`
- Type选择器： `QPushButton`, 包括subclasses
- 属性选择器：`QPushButton[flat="false"]`
- Class选择器: `.QPushButton`, 不包括subclasses
- ID 选择器：`QPushButton#okButton`
- Child选择器: `QDialog > QPushButton` 

选择widget的子部件

```css
QComboBox::drop-down {image:url(dropdown.png)}
```

## 特异性计算

选择器的特异性计算如下：

- 计算选择器中ID属性的数量（=a）
- 计算选择器中其他属性和伪类的数量（=b）
- 计算选择器中元素名称的数量（=c）
- 忽略伪元素{如subcontrols)

## 继承与CSS的区别

- CSS中，如果未明确设置项目的字体和颜色，则会自动从父项继承
- QSS表，小部件不会自动从其父小部件继承其字体和颜色设置。

## 命名空间

```c++
namespace ns {
    class MyPushButton : public QPushButton {
        // ...
    }
}
// ...
qApp->setStyleSheet("ns--MyPushButton { background: yellow; }");
```

使用`--`表示引用命名空间