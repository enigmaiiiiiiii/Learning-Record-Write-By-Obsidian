# QSqlDatabase

- 一个QSqlTableModel对应一个连接

***
        
```c++
QSqlDatabase QSqlDatabase::addDatabase(const QString &type , const QString& connectionName=QLatin1String(DefaultConnection))
```

addDatabase()

- 静态public 函数
- 创建type类型的数据库连接， 返回QSqlDatabase对象
- 连接名称为connectionName
  - 不提供connectionName将使用**默认连接名称**
  
***

```c++
QSqlDatabase QSqlDatabase::database(const QString &connectionName = QLatin1String(defaultConnection), bool open = true)
```

database()

- 返回connectionName对应的QSqlDatabase对象
- QSqlDatabase必须是已经通过addDatabase创建的对象, 如果不存在返回无效对象

***

```c++
void QSqlDatabase::setDatabaseName(const QString &name);
```

setDatabaseName()

- 数据库名称
- 若指定name将生成文件名为name的数据库文件 
- 设置为`:memory:`: 将创建一个临时数据库，仅在应用程序的生命周期内可用。
- 空文件名?

> 需要在open之前
