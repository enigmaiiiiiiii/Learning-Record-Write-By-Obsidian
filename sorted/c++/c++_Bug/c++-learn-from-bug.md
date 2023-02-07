# begin with Hello World

> 记录顺序为遇到时间先后

## 1. compiler使用错误

gcc prog1.cpp

用命令行运行编译程序时,c++的编译器时g++，不是gcc,

改为： ```g++ prog1.cpp``` 或 ```gcc prog1.cpp -lstdc++```

## 2. Object Files Not Linked Properly

预计涉及到cmake

![c++](c++-error-undifined-reference.png)

问题首次分析：没有正确构建c++项目,没有正确链接c++源文件

[Bug3](c++-bug-multiple-definition.md)

[Bug4](c++-bug-undefine-reference-to-vtable.md)

##  5. QAbstractItemModel::match()

- QAbstractItemModel派生类调用基类match函数, 使用Qt::MatchFlags参数Qt::MatchRecursive, 若实现不合适，可能会出现无限递归

```c++
QModelIndexList QAbstractItemModel::match(
    const QModelIndex &start, int role,
    const QVariant &value, int hits,
    Qt::MatchFlags flags) const
{
    // recursive相关代码
    if (recurse) {
        const auto parent = column != 0 ? idx.sibling(idx.row(), 0) : idx;
        if (hasChildren(parent)) { // search the hierarchy
            result += match(index(0, column, parent), role,
                            (text.isEmpty() ? value : text),
                            (allHits ? -1 : hits - result.count()), flags);
        }

    }
    // ...
}
```


## 6. 返回值

### 6.1

- 一般判断容器中是否由某个key时，使用find()成员观察其返回值，如果返回值等于end()返回的尾后迭代器, 则不存在
- 而`==`, 两边是两个对象, 无论如何find()都不会等于另一个对象的end()

- 可以使用contains()判断
- 返回const引用`const std::map<QString, int>&`

```c++
class A
{
public:

    ~A() = default;
    A()
    {
       m.insert(std::pair<QString, int>("edge0", 9));
       m.insert(std::pair<QString, int>("edge1", 1));
       m.insert(std::pair<QString, int>("edge2", 2));
    }

    std::map<QString, int> fx()
    {
       return m;
    }
private:
    int a;
    int b;
    std::map<QString, int> m;

};

int main(int argc, char *argv[])
{

    A *a = new A();
    if (a->fx().find("edge3") == a->fx().end()) {
        qDebug() << "not found edge3";
    } else {
        qDebug() << "find";
    }
    return 0;
}
```

## 6.2

```c++
class A

{
public:
    ~A() = default;
    A()
    {
       m.insert("edge", 9);
       m.insert("edge1", 1);
       m.insert("edge2", 2);
    }
    int fy(QString name)
    {
        return m[name];
    }
    const QMap<QString, int>& fx()
    {
       return m;
    }

private:
    QMap<QString, int> m;

};
```

`return m[name];` 若name不存在会创建新元素

## 7. 拷贝构造函数

QList和vector添加元素是拷贝操作，调用拷贝构造函数

