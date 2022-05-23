# stream

QTextStream



QDataStream

- 数据流是编码信息的二进制流，100%独立于主机的操作系统、CPU或字节顺序

> 例如，PC在Windows下写的数据流可以被运行Solaris的Sun SPARC读取。

file.data写入data数据

```c++
QFile file("file.dat");
file.open(QIODevice::WriteOnly);
QDataStream out(&file);   // we will serialize the data into the file
out << QString("the answer is");   // serialize a string
out << (qint32)42;        // serialize an integer%%
```

读file.dat中的数据

```c++
QFile file1("file.dat");
file1.open(QIODevice::ReadOnly);
QDataStream in(&file1);    // read the data serialized from the file
QString str;
qint32 aa;
in >> str >> aa;
```

