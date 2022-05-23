# 委托

- QAbstractItemDelegate
- QItemDeleagate
  - 为[QAbstractItemView]类提供可定制的显示特性和小部件

## 为委托设置一个编辑器

- createEditor()
- 视图需要编辑器时，告诉委托创建一个Widget
- 不需要时可销毁

```c++
QWidget *QItemDelegate::createEditor(QWidget *parent, 
                                     const QStyleQptionViewItem &option
                                     const QModelIndex &index) const
```

## 为编辑器设置数据

- setEditorData()
- 将委托中的数据复制到编辑器中
- 通常按Enter键时调用

```c++
void QItemDelegate::setEditorData(QWidget *editor, 
                                  const QModelIndex &index) const
```

- editor在不同index中可以是不同的Widget
- 因此在使用前需要将editor[转换](c++_Static_Cast.md)为合适的类型

```c++
// 将editor 转换为 QSpinBox
QSpinBox *spinBox = static_cast<QSpinBox*>(editor);
```

## 设置编辑器相对于项目视图的显示。

- updateEditorGeometry()
- QStyleOptionViewItem提供类所有需要的集合布局信息

```c++
void QItemDelegate::updateEditorGeometry(QWidget *editor,
                                         const QStyleOptionViewItem &option, 
                                         const QModelIndex &index) const
```

## 将数据写入模型

- setModelData()

```c++
void QItemDelegate::setModelData(QWidget *editor,
                                 QAbstractItemModel *model, 
                                 const QModelIndex &index) const
```