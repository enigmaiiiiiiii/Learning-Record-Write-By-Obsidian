# QSqlQuery

## 初始化

```c++
QSqlQuery::QSqlQuery(const QString &query = QString(), const QSqlDatabase &db = QSqlDatabase())
```

- `QSqlQuery query;` : 使用默认数据库创建query

## 状态判断

- isActive()返回true, 查询语句执行成功 
- isValid(): 只有导航到有效记录时, 返回true
- isSelect(): 当前query是一个Select语句时返回true

## 结果查询

```c++
bool QSqlQuery::seek(int index, bool relative = false)
```

seek()

- isSelect()返回true的query才能调用此函数 
- 参数relative = false时
  - 移动到index所指向的记录，如果不能达到index, 结果放在最后一条记录之后，并返回false 
  - index是负值: 结果放在第一条记录之前, 并返回false

at(): 返回当前记录的位置

## 执行sql语句
  
```c++
QSqlQuery query(qdb);
query.exec("select * from student");
```

exec()

- 执行SQL语句 
- 初始化, 绑定QSqlDatabase对象
- 运行完exec()后，query将定位在无效位置，query.isValid()返回false

***

```c++
bool QSqlQuery::prepare(const QString &query)
```

prepare()

- 将要执行的sql查询语句, 调用exec()后执行  
- 支持？和：形式的占位符, 从而通过bindValue()使语句完成

***

```c++
void QSqlQuery::bindValue(const QString &placeholder, 
                          const QVariant &val, 
                          QSql::ParamType paramType = QSql::In)
```

bindValue()

- 占位符绑定

