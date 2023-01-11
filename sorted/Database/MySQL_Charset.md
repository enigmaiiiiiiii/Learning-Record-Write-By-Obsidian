# 字符集

[字符集](../概念知识/Characters_Code.md)

- 用于解释存储内容的编码方式, 
- 后缀ci表示case ignore, 即字符集是不区分大小写的

## 指定字符集

指定表的字符集

```sql
Create Table tbl_name(
    id int,
    name varchar(20)
) charset=utf8;
```

## 字符集信息

- DATABASE: INFORMATION_SCHEMA
  - TABLES: CHARACTER_SETS

## collation排序规则

以字符集utf8为例

```sql
CREATE TABLE t (a VARCHAR(10)) CHARSET=utf8;
select * from t where a = 'a';
```

output

```shell
+------+
| a    |
+------+
| a    |
| A    |
+------+
```
根据utf8字符集默认排序规则utf8_general_ci

```sql
select 'a' = 'A';
```

output

```shell
+-----------+
| 'a' = 'A' |
+-----------+
|         1 |
+-----------+
```

设置列排序规则为utf8_bin

```sql
ALTER TABLE t MODIFY column a VARCHAR(10) collate utf8;
SELECT * FROM t WHERE a = 'a';
```

```shell
+------+
| a    |
+------+
| a    |
+------+
```

## 字符集和排序规则

- 字段(column) > 表(table) > 数据库(database) > MySQL服务器配置(server)
