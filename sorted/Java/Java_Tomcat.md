# Tomcat

## install

[On Linux](Tomcat_Install_On_Linux.md)

## 简介

Enviromment Variables

- `$CATALINA_HOME`: a tomcat instance directory(we may have multiple tomcat instances)
- `$CATALINA_BASE`: default same as `$CATALINA_HOME`

> web app deployed under the `$CATALINA_HOME/webapps` directory

## 术语

**Document root**: the directory where the web app is deployed, like JSP, HTML, Java classes, and images

**Context path**: relative path to server address, represents the name of the web app

- if my web app is deployed under the `$CATALINA_HOME/webapps/myapp` directory, it'll be accessed by URL `http://localhost:port/myapp`

**WAR**: [Web Application Archive](Java_War_File.md), a compressed file containing all the files of a web app

- After deploy in `$CATALINA_HOME/webapps` Directory, **Tomcat will (auto) unpacks it** and stores all the project files from webapps directory in a new directory named after the project

## Start

- `$CATALINA_HOME/bin/startup.sh`

## configure Roles

- 为了安全起见，Tomcat默认不允许任意用户访问管理页面，需要配置用户角色

```xml
<role rolename="manager-gui"/>
<role rolename="manager-script"/>
<user username="admin" password="password" roles="manager-gui, manager-script"/>
```

## Web Application Deloyment

[Web Application Deployment](Tomcat_Deployment.md)

## log

- `$CATALINA_HOME/logs/catalina.out`