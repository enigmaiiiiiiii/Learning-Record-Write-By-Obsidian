# Tomcat Install On Linux

[article I](https://www.atlantic.net/dedicated-server-hosting/how-to-install-apache-tomcat-10-on-rocky-linux-8/)
[article II](https://kifarunix.com/install-apache-tomcat-on-rocky-linux-8/)

- [tar]
- [chmod]
- [chown]
- [alternatives]
- [etc/profile](../Linux/Linux_System_Environment.md)
- [用户和分组]

## rocky linux

下载tar.gz包到一个临时文件夹或存放下载文件的文件夹, 比如/tmp

```bash
cd /tmp
curl -O https://dlcdn.apache.org/tomcat/tomcat-10/v10.0.27/bin/apache-tomcat-10.0.27.tar.gz
```

解压到[/opt/tomcat](Linux_System_Directory.md)目录

```bash
cd /opt/tomcat
sudo tar xzvf path/to/apache-tomcat-10.0.27.tar.gz
```

## 设置环境变量

[alternatives](Linux_Alternatives.md)查看当前java命令所在目录, 用于设置JAVA_HOME

```bash
alternatives --list | grep java
```

假如输出内容如下:

```
/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/bin/java
```

JAVA_HOME就是`/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64`

[环境变量](Linux_System_Environment.md)`JAVA_HOME`, `CATALINA_HOME`, 设置在`/etc/profile.d/tomcat.sh`文件中

```bash
vim /etc/profile.d/tomcat.sh
```

添加内容

```
export CATALINA_HOME="/opt/tomcat"
export JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64"
```

## 创建用户


**网络服务器通常不以特权(sudo/root)用户运行**

创建用户`tomcat`

```bash
useradd -r -d /opt/tomcat/ -s /bin/false -c "Apach Tomcat User" tomcat
```

设置权限

```bash
chown -R tomcat: /opt/tomcat
```

## 设置Web Management Accounts

此账号用于管理tomcat, 通过`http://localhost:8080/manager/html`访问

```bash
vim /opt/tomcat/conf/tomcat-users.xml
```
访问`http://localhost:8080/manager/html`时, 需要输入用户名和密码, 用于验证

```xml
<tomcat-users>
  ...
  <role rolename="admin-gui"/>
  <role rolename="manager-gui"/>
  <user username="admin" password="mystrongpassword" roles="admin-gui,manager-gui"/>
</tomcat-users>
```

- 设置用户名和密码分别为`admin`和`mystrongpassword`

## Configure Remote Host

> tomcat默认只允许本地访问, 需要修改配置文件

```bash
vim /opt/tomcat/webapps/manager/META-INF/context.xml
```

删除这一条

```xml
<Valve className="org.apache.catalina.valves.remoteAddrValve" allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1">
```

## allow external access

```sh
firewall-cmd --permanent --add-port=8080/tcp
firewall-cmd --reload
```

## run as service

```sh
vim /etc/systemd/system/tomcat.service
```

```
[Unit]
Description=Apache Tomcat Server
After=syslog.target network.target

[Service]
Type=forking
User=tomcat
Group=tomcat

Environment=CATALINA_PID=/opt/tomcat/temp/tomcat.pid
Environment=CATALINA_HOME=/opt/tomcat
Environment=CATALINA_BASE=/opt/tomcat

ExecStart=/opt/tomcat/bin/catalina.sh start
ExecStop=/opt/tomcat/bin/catalina.sh stop

RestartSec=10
Restart=always
[Install]
WantedBy=multi-user.target
```

[start and enable](/sorted/Linux/Linux_System_Command.md#systemctl)

```bash
systemctl enable --now tomcat
```

check

```bash
system status tomcat
```

output like:

```
● tomcat.service - Apache Tomcat Web Application Container
     Loaded: loaded (/etc/systemd/system/tomcat.service; enabled; vendor preset: disabled)
     Active: active (running) since Fri 2022-12-02 15:36:57 CST; 3 days ago
   Main PID: 42026 (java)
      Tasks: 27 (limit: 10768)
     Memory: 145.4M
        CPU: 16min 19.334s
     CGroup: /system.slice/tomcat.service
             └─42026 /usr/lib/jvm/jre/bin/java -Djava.util.logging.config.file=/opt/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apac>

Dec 02 15:36:57 localhost.localdomain systemd[1]: Starting Apache Tomcat Web Application Container...
Dec 02 15:36:57 localhost.localdomain startup.sh[42019]: Tomcat started.
Dec 02 15:36:57 localhost.localdomain systemd[1]: Started Apache Tomcat Web Application Container.
```