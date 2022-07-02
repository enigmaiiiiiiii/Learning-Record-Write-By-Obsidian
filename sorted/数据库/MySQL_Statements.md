# MySQL语句

> 全大写单词表示MySQL语句

启动数据库

```shell
mysql -u root -p
```

使用数据库

```mysql
USE dbname;
```

- 返回可用数据库列表

```
SHOW DATABASES;
```

- 返回当前数据库内可用表的列表

```
SHOW TABLES; 
```

- 返回数据库dbname的可用表的列表

```
SHOW TABLES IN dbname;
```

- 显示表的列

```
SHOW COLUMNS FROM dbtables
```

- 查看mysql用户

```mysql
SELECT user FROM mysql.user
```

