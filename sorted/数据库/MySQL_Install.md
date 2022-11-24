# 安装

## Ubuntu安装MySql

1. `sudo apt install mysql-client-core-8.0` 安装mysql客户端

> 客户端操作数据

2. `sudo apt install mysql-server` 安装mysql服务端

  > 服务端存储数据, 是核心程序
  
3. MySQL服务管理 

```shell
sudo service mysql status  # 查看服务
sudo service mysql start   # 启动服务
sudo service mysql stop    # 停止服务
sudo service mysql restart # 重启服务
```
4. 查看默认账户密码

```shell
sudo cat /etc/mysql/debian.cnf
```

## WSL下安装MySql

> 使用[chown](Linux_Command_Chown.md) 修改文件夹权限

```bash
sudo mkdir -p /var/run/mysqld  # 创建文件夹
sudo chown mysql /var/run/mysqld/ # 修改文件夹权限
sudo service mysql restart
```

## windows下安装MySql

- 下载安装包

重启sql service

1. Open 'Run' (Windows Key + R)
2. Type 'services.msc'
3. search MySQL
4. click stop, start, restart
