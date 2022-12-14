# Configure Tomcat

## configure Roles

- 为了安全起见，Tomcat默认不允许任意用户访问管理页面，需要配置用户角色

```xml
<role rolename="manager-gui"/>
<role rolename="manager-script"/>
<user username="admin" password="password" roles="manager-gui, manager-script"/>
```

## configure language of log and output

1. add followed content in `catalina.bat` in windows
2. add followed content in `catalina.sh` in linux

```sh
JAVA_OPTS="$JAVA_OPTS -Duser.language=en -Duser.region=US"
```

