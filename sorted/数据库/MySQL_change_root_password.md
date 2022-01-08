# mysql修改root密码

1. 停止MySQL服务器，使用--skip-grant-tables重新启动服务器

```
sudo service mysql stop
sudo service mysql start --skip-grant-tables
```

2. 使用重新连接到服务器

```
mysql
```

3. 在客户端中，告诉服务器重新加载授权表

```
FLUSH PRIVILEGES;
```

4. 更改密码

```
ALTER USER 'root'@'localhost' identified by 'MyNewPassWord';
```