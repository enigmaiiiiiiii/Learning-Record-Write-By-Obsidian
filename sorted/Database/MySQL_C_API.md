# MySQL的C语言接口
- mysql_real_connect()

```c
MYSQL *
mysql_real_connect(MYSQL *mysql,
                   const char *host,
                   const char *user,
                   const char *passwd,
                   const char *db,
                   unsigned int port,
                   const char *unix_socket,
                   unsigned long client_flag)
```

mysql_real_connect()函数尝试建立一个与MYSQL服务的连接, 返回一个可供其他mysqlAPI
使用的MYSQL对象指针

- mysql_init()

```c
MYSQL *
mysql_init(MYSQL *mysql)
```

初始化一个适用于mysql_real_connect()的MYSQL的对象



## C接口数据结构

- MYSQL: 数据库连接句柄，几乎用于所有MySQL函数
- MYSQL_RES: 返回MySQL语句的查询结果