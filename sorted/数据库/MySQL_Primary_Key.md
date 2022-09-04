# 主键

- 表示数据唯一性的字段
- 非空

```sql
create table tbl(id int primary key, name varchar(20));
insert into tbl values(1, 'uni');
insert into tbl values(1, 'another');  -- error: Duplicate entry '1' for key 'PRIMARY'
insert into tbl values(null, 'name');  -- error: Column 'id' cannot be null
```
## 自增主键

- 主键为null时自增，自增从历史最大值+1


```sql
create table tbl(id int primariy key auto_increment, name varchar(20));
insert into tbl values(null, 'first');
insert into tbl values(null, 'second');
insert into tbl values(10, 'tenth');
insert into tbl values(null, 'next');  -- id从10开始自增, id=11
select * from tbl; 
```
optput

```shell
+----+--------+
| id | name   |
+----+--------+
|  1 | first  |
|  2 | second |
| 10 | tenth  |
| 11 | next   |
+----+--------+
```
