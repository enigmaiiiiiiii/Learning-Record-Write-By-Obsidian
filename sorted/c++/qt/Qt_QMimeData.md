# QMimeData

- 用于处理拖放数据
- 一个QMimeData对象可以同时使用几种不同的格式存储相同的数据。

## 成员

```c++
```

format()函数按照优先级返回可用格式的列表。

```c++
QByteArray QMimeData::data(const QString &mimeType) const
```

返回mimeType关联的原始数据

```c++
void QMimeData::setData(const QString &mimeType, const QByteArray &data)
```

setData()允许为MIME类型设置数据

- 用于使用自定义数据类型

> 必须使用Q_DECLARE_METATYPE()宏将其注册为Qt元类型，并为其实现流运算符。然后，必须使用qRegisterMetaTypeStreamOperators()函数注册流运算符。

```c++
```

hasUrls(): 如果对象可以返回[url](Http_URL_And_URI.md)列表，则返回true;否则返回false。

```c++
```

hasHtml(): 如果存储在对象中的数据是HTML (MIME类型text/ HTML)，则返回一个字符串;否则返回空字符串。