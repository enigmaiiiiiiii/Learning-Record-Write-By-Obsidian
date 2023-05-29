# Web Application Deployment

## Contexts Descriptor

- a contexts descriptor is a XML file

locations for Context Descriptors:

1.  `$CATALINA_HOME/conf/[enginename]/[hostname]/[webappname].xml`
2.  `$CATALINA_HOME/webapps/[contextname]/META-INF/context.xml`

> in early version of tomcat, context defined in `server.xml`

## Tomcat deployment at starting

tomcat deployment process:

1. [context descritor](#contexts-descriptor) deploy first
2. 部署未打包的, 和任何context descriptor都没有关联的web app; 如果这个未打包的web app关联一个.war文件, 这个未打包的文件会被删除, 并将关联.war文件重新部署
3. 部署.war文件

## Tomcat运行时部署

## Deploy WAR File

[deploy war file](tomcat-deploy-war-file.md)

