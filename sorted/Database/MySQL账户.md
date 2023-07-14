# MySQL - Account


```mysql
CREATE USER [IF NOT EXISTS] 
    _user_ [_auth_option_] [, _user_ [_auth_option_]] ...
    DEFAULT ROLE _role_ [, _role_ ] ... 
    [REQUIRE {NONE | _tls_option_ [[AND] _tls_option_] ...}] 
    [WITH _resource_option_ [_resource_option_] ...] 
    [_password_option_ | _lock_option_] ... 
    [COMMENT '_comment_string_' | ATTRIBUTE '_json_object_']
```

## Account Name

- Syntax: `'user_name'@'host_name'`

## auth_option Syntax

let literal 'auth_string' be used as password

```mysql
CREATE USER IDENTIFIED BY 'auth_string'
```

random generated password

```mysql
CREATE USER IDENTIFIED BY RANDOM PASSWORD
```

