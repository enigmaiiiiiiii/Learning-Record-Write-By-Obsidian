# 查询日志

## 一般查询日志

- 通过[系统变量](mysql-server-system-variables.md)`general_log`来控制是否开启查询日志

```sql
set global general_log = 1;
```

## 慢查询日志

- 慢查询日志: 由超过`long_query_time`的设置的时间并且满足`min_examined_row_limit`的设置的行数的**查询语句**组成

启用慢查询日志

- 客户端设置slow_query_log[系统变量](mysql-server-system-variables.md)

```mysql
mysql> SET GLOBAL slow_query_log = 'ON';
```

> 好像要restart客户端才能生效

测试语句

```sql
select sleep(15);
```

- ~~使用--slow-query-log选项启用~~

慢查询日志文件

- 路径通过设置slow_query_log_file[系统变量](mysql-server-system-variables.md)来设置

```sql
set global slow_query_log_file = '/var/log/mysql/slow.log';
```

## 日志输出位置

