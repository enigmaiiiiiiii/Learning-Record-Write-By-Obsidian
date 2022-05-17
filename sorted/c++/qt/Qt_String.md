# QString

- QString存储一个16位QCHAR的字符串
- 每个QCHAR对应于一个UTF-16代码单元。 
- 使用连续两个QCHARS存储大于等于65535的Unicode字符

## 转换

### 1. 字符数字转换

字符转数字

```c++
QString qstr = "0x123";
int i = qstr.toInt();
long l = qstr.toLong();
```

数字转字符

```c++
double total = 1234.4321;
// QString的静态函数
QString str = QString::number(total, 'f', 2);
QString str = QString::asprintf("%.2f", total);

// 成员函数
str = str.setNum(total, 'f', 2);
str = str.sprintf("%.2f", total);
```

### 2. 进制转换 

```c++
QString &setNum(int n, int base = 10);
// 静态函数
QString number(int n, base = 10);
```