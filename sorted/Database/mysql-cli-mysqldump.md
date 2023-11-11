# Mysql - CLI mysqldump

- dump MySQL database and table structure and content

```bash
mysqldump [options] database [tables]
```

- dump all table from `database_name`

```bash
mysqldump -u root -p database_name
```

## mojibake

1. "绠€浠嬶紙鏌愪簺灞炴€у悕绉板彲鑳界浉鍚岋紝閫氳繃绠€浠嬭ˉ鍏呮弿杩帮級"

when use vscode terminal to execute this command, chinese character is mojibake

```bash
mysqldump -u root -p database_name > database_name.sql
```

temporarily solution, use cmd

