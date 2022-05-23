# QMimeData

- 用于处理拖放数据
- 一个QMimeData对象可以同时使用几种不同的格式存储相同的数据。

## 成员

```c++
```

- format()函数按照优先级返回可用格式的列表。

```c++
```

- data()函数返回与MIME类型相关联的原始数据

```c++
void QMimeData::setData(const QString &mimeType, const QByteArray &data)
```

setData()允许为MIME类型设置数据

```c++
```

hasUrls(): 如果对象可以返回[url](Http_URL.md)列表，则返回true;否则返回false。

```c++
```

hasHtml(): 如果存储在对象中的数据是HTML (MIME类型text/ HTML)，则返回一个字符串;否则返回空字符串。