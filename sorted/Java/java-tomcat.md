# Tomcat

## install

[On Linux](tomcat-install-on-linux.md)

## description

Enviromment Variables

- `$CATALINA_HOME`: a tomcat instance directory(we may have multiple tomcat instances)
- `$CATALINA_BASE`: default same as `$CATALINA_HOME`

> web app deployed under the `$CATALINA_HOME/webapps` directory

## Glossary

**Document root**: the directory where the web app is deployed, like JSP, HTML, Java classes, and images

**Context path**: relative path to server address, represents the name of the web app

- if my web app is deployed under the `$CATALINA_HOME/webapps/myapp` directory, it'll be accessed by URL `http://localhost:port/myapp`

**WAR**: [Web Application Archive](java-war-file.md), a compressed file containing all the files of a web app

- After deploy in `$CATALINA_HOME/webapps` Directory, **Tomcat will (auto) unpacks it** and stores all the project files from webapps directory in a new directory named after the project

## Start

- `$CATALINA_HOME/bin/startup.sh`

## Configure

[Configure](tomcat-configure.md)

## Web Application Deloyment

[Web Application Deployment](tomcat-deployment.md)

## log

- `$CATALINA_HOME/logs/catalina.out`
