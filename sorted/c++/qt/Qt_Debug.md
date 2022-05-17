# QDebug

- 实用操作，调用qDebug()函数获得默认QDebug对象

```c++
qDebug() << "Date:" << QDate::currentDate();
qDebug() << "Types:" << QString("String") << QChar('x') << QRect(0, 10, 50, 40);
qDebug() << "Custom coordinate type:" << coordinate;
```