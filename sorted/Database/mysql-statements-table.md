# SQL - Table Operations

## Create Table

[Create Table](mysql-statements-table-create.md)

## Rename Table

## Query Column Information

> before query column information, [use database]() first

```sql
DESC tbl_name
```

## Delete Table

```sql
DROP TABLE tbl_name
```

## Change Table Structure

### Alter Column Information

```sql
ALTER TABLE tbl_name MODIFY | CHANGE | RENAME col_name col_property
```

- `CHANGE`: modify column name and definition
- `MODIFY`: modify column definition
- `RENAME`: modify column column name

```sql
ALTER table tbl_name RENAME col_name TO new_col_name
```

### Add Column

```sql
ALTER TABLE tbl_name ADD col_name col_property [FIRST|AFTER col_name]
```

- `first`: represent add column at the first column
- `after`: represent add colun at the specified column

### Delete Column

```sql
ALTER TABLE tbl_name DROP col_name
```
