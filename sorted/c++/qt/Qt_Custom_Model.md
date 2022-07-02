# 自定义模型

至少需要实现5个虚函数

- columnCount(), rowCount(), index(), parent(), data()

添加数据

- 需要实现setData()

## 实现细节

columnCount() 和 rowCount()

- 对于 3 行 4 列的表格结构 columnCout()应返回 4， rowCount()应返回 3
- 对于列表结构，则因为列表只需要 1 列，所以 columncout() 应总是返回 1

index()

```c++
QModelIndex QAbstractItemModel::index(int row, int column, constQModelIndex &parent);
```

- 返回以父索引parent确定的row, column处的QModelIndex
- 代码细节
  - 判断索引是否有效
  - 返回QModelIndex对象
- 用于为模型中的每个数据项创建索引
- 创建索引需要使用createIndex()函数
- 对于表格结构，只需向 createIndex()函数传递当前数据项所在的行号、列号及使用的数据的指针
- 对于列表结构，则列号始终为 0， 其余同表格结构
- 对于树形结构，需要向该函数传递当前数据项位于父索引中的行号、列号及使用的数据的指针

parent()

- 对于表格模型和列表模型

> 无效父索引通常表示为QModelIndex()

  - 因为表格结构中的所有单元格都属于同一个父索引之下，所以可把所有单元格都视为顶级节点，
  - 因此他们的父索引可以以无效模型索引作为父索引，
  - 因此parent()可以返回一个无效模型索引
- 对树形结构模型，此步骤比较复杂， 可以通过获取当前节点的父节点及其行号和列号，然后使用 createIndex()创建该 父节点的索引

data()

- 不同角色参数获得不同值

## 示例

CustomModel.h

```c++
class D:public QAbstractItemModel
{
public:
    int col, rw;
    QList<QVariant> sl;
    Qlist<int> rol;  // 角色
    D(int i, int j) :rw(i), col(j) 
    {
        for (int k = 0; k < clo * rw; k++*)
        {
            s1 << QVariant(); 
            rol << -1;
        }
    }
    int rowCount(const QModelIndex &parent = QModelIndex()) const
    {
        return rw;
    }
    
    int columnCount(const QModelIndex &parent = QModelIndex()) const
    {
        return col;
    }
    QModelIndex parent(const QModelIndex &index) const 
    {
        return QModelIndex();
    }
    
    QModelIndex index(int row, int column, const QModelIndex& parent = QModelIndex()) const 
    {
        // 判断模型是否有效
        return createIndex(row, column, (void*)&(sl.at(row * column + column)));
    }

    QVariant data(const QModelIndex &index, int role = Qt::DisplayRole) const
    {
        int i = index.row() * col + index.column();

        if(role==Qt::CheckStateRole) return QVariant(); 
        
        //设置单元格中数据的对齐方式，本示例为左侧垂直居中对齐 
        if(role==Qt::TextAlignmentRole) return Qt::AlignLeft|Qt::AlignVCenter; 
        
        //设置角色 DecorationRole(图片)的数据 
        if(role==Qt::DecorationRole) 
        {
            //若用户设置了 DecorationRole 角色的数据，则返回用户为该单元格设置的数据。
            if(rol.at(i)==Qt::DecorationRole) return s1.at(i); 
        }
        //若用户为角色 EditRole 或 DisplayRole 角色设置了数据，则返回用户为该单元格设置的数据。 
        if(role==Qt::EditRole|role==Qt::DisplayRole)
        { 
            if(rol.at(i)==Qt::EditRole|rol.at(i)==Qt::DisplayRole) return s1.at(i); 
        }
        //其余角色使用无效数据 return QVariant();
    }

};
```