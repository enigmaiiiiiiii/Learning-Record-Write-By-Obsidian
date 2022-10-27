# 开始使用

## 启动

- windows

```bash
seata-server.bat -p 8091 -h 127.0.0.1 -m file
```

- linux

```bash

```

## 创建undo_log表

```sql
create tabel `undo_log` {
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `branch_id` bigint(20) NOT NULL,
    `xid` varchar(100) NOT NULL,
    `context` varchar(128) NOT NULL,
    `rollback_info` longblob NOT NULL,
    `log_status` int(11) NOT NULL,
    `log_created` datetime NOT NULL,
    `log_modified` datetime NOT NULL,
    `ext` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_xid` (`xid`)
    } ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```