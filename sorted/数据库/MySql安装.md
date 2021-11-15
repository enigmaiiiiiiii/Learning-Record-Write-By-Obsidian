# install

## Ubuntu安装MySql

- apt安装
1. wget下载mysql配置文件deb安装包:
   `wget https://dev.mysql.com/get/mysql-apt-config_0.8.19-1_all.deb`
2. apt执行mysql配置deb文件`sudo apt install ./mysql-ap-config_0.8.19-1_all.deb`
3. `sudo apt install mysql-client-core-8.0` 安装mysql客户端
  > 客户端操作数据
4. `sudo apt install mysql-server` 安装mysql服务端
  > 服务端存储数据, 是核心程序
  
  *密码暂定000000*

## WSL下安装MySql

[[mkdir]] [[chown]] 

```shell
sudo mkdir -p /var/run/mysqld  # 创建文件夹
sudo chown mysql /var/run/mysqld/ # 修改文件夹权限
sudo service mysql restart
```
