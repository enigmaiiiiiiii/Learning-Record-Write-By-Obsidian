# 开始使用

1. 连接

```shell
mysql -u root -p
```

2. 创建数据库

```sql
CREATE DATABASE 数据库名称
```

3. 返回可用数据库列表

```
SHOW DATABASES;
```

4. 连接数据库

```sql
USE 数据库名称 
```

5. 返回当前数据库内可用表的列表

```
SHOW TABLES; 
```

6. 返回数据库dbname的可用表的列表

```
SHOW TABLES IN dbname;
```

7. 显示表的列

```
SHOW COLUMNS FROM dbtables
```

8. 创建数据表

```sql
CREATE TABLE name(列名称 列类型)
```

9. 插入数据

```
INSERT INTO table_name(filed1, field2, ..., fieldN)
                       VALUES
                       (val1, val2, ..., valN);
```

10. 查询数据

```sql
SELECT * FROM table_name;
```

11. 查看mysql用户

```sql
SELECT user FROM mysql.user
```

12. 删除数据库

```sql
DROP DATABASE dbname
```
