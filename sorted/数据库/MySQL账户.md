# MySQL账户


```mysql
CREATE USER [IF NOT EXISTS] 
    _user_ [_auth_option_] [, _user_ [_auth_option_]] ...
    DEFAULT ROLE _role_ [, _role_ ] ... 
    [REQUIRE {NONE | _tls_option_ [[AND] _tls_option_] ...}] 
    [WITH _resource_option_ [_resource_option_] ...] 
    [_password_option_ | _lock_option_] ... 
    [COMMENT '_comment_string_' | ATTRIBUTE '_json_object_']
```

## 账户名称

- 语法为`'user_name'@'host_name'`

## auth_option语法

```mysql
CREATE USER IDENTIFIED BY 'auth_string'
```

将明文'auth_string'作为密码

```mysql
CREATE USER IDENTIFIED BY RANDOM PASSWORD
```

随机生成密码
