# 系统变量

## 查看系统变量

- 系统变量保存在`information_schema`数据库的`GLOBAL_VARIABLES`表中

查看变量名中包含`log`的值

```sql
use information_schema;
select * from GLOBAL_VARIABLES where VARIABLE_NAME like '%log%';
```

## foreign_key_checks

- 是否检查外键约束
  - 1: 检查外键约束, 默认值
  - 0: 不检查外键约束