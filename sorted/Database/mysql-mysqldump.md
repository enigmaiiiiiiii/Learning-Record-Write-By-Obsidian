# mysqldump命令

- 转储MySQL数据库和表的结构和内容

```bash
mysql [options] database [tables]
```

导出database_name数据库的所有表

```bash
mysql -u root -p database_name
```

## 乱码

1. "绠€浠嬶紙鏌愪簺灞炴€у悕绉板彲鑳界浉鍚岋紝閫氳繃绠€浠嬭ˉ鍏呮弿杩帮級"

使用vscode命令行执行如下命令, 中文出现乱码

```bash
mysqldump -u root -p database_name > database_name.sql
```
暂时解决方案，使用cmd命令行

2. 