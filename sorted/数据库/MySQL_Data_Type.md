# 数据类型

## 数值

- TINYINT
- SMALLINT
- MEDIUMINT
- INT: 
- BIGINT(m): 等效Java基本类型[long](Java_Primitray_Type.md)
  - m表示显示长度
  - zerofill: 用0填充
- FLOAT
- DOUBLE(m, d): 
  - m: 总长度
  - d: 小数长度
- DECIMAL

## 字符串类型

- CHAR(m)
  - 固定长度
- VARCHAR(m)
  - 可变长度, m参数表示最大可用长度
  - m取值0 ~ 65535
  - 占用字节数: 
    - 1 + m: m <= 255
    - 2 + m: 256 <= m <= 65535
  - 可以是[索引]的一部分
  - 节省空间
- BLOB
- TEXT
  - 长度固定为65535字符
  - 不能成为[索引]的一部分
- MEDIUMBLOB
- MEDIUMTEXT
- LONGBLOB
- LONGTEXT
- TINYBLOB
- TINYTEXT

## NULL值

- 意思是no data
- 参与比较运算, 得到null
- 用`is null` 或 `is not null`测试是否为null值

> `null + 1 is null`

```sql
select 0 is null, 0 is not null;
select 1 = null, 1 <> null, 1 < null, 1 > null
```

```shell
+-----------+---------------+
| 0 is null | 0 is not null |
+-----------+---------------+
|         0 |             1 |
+-----------+---------------+
```

## 日期和时间

- DATE: 年月日, 格式yyyy-mm-dd
- TIME: 时分秒, 格式hh:mm:ss
- YEAR: 
- DATETIME: data + time
- TIMESTAMP: 距1970.1.1的毫秒数, 默认当前系统时间
  - 默认值: `CURRENT_TIMESTAMP()`, 
  - 默认自动更新: 表示更新为当前条目其他列发生改变时的时间, Extra值为`on update current_timestamp()` 

timestamp打开自动更新后

```sql
alter table tbl_name change 
  timestamp_col timestamp_col timestamp 
  default 
    current_timestamp 
    on update current_timestamp;
```
关闭自动更新

```sql
alter table tbl_name change
  timestamp_col timestamp_col timestamp
  default 
    current_timestamp;
```

## 举例说明

### INT

```sql
create database db;
use db;
create table tbl(num int(5) zerofill)
insert into tbl values(81);
select * from tbl;
```

output

```shell
+-------+
| age   |
+-------+
| 00090 |
+-------+
```

### DOUBLE

```sql
create table tbl(num double(5, 3));
insert into tbl values(23.234);
insert into tbl values(23.234567);
insert into tbl values(234.34);  // 超出范围
select * from tbl2;
```
output

```shell
+--------+
| num    |
+--------+
| 23.234 |
| 23.234 |
+--------+
```

## 


