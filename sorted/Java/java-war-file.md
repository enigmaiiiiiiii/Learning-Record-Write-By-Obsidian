# War File

- WAR: **Web Application** Resource
- collection of [Jar files](java-jar-file.md), [JavaServer Pages(JSP)](), [Java Servlets](), [Java Classes](), XML, tag libraries, static web pages

## web.xml

./WEB-INF/web.xml:

- web application deployment descriptor
- 定义了web应用程序解构

web.xml文件大致内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE web-app
    PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.2//EN"
    "http://java.sun.com/j2ee/dtds/web-app_2_2.dtd">

<web-app>
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>mypackage.HelloServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/HelloServlet</url-pattern>
    </servlet-mapping>

    <resource-ref>
        <description>
            Resource reference to a factory for javax.mail.Session
            instances that may be used for sending electronic mail messages,
            preconfigured to connect to the appropriate SMTP server.
        </description>
        <res-ref-name>mail/Session</res-ref-name>
        <res-type>javax.mail.Session</res-type>
        <res-auth>Container</res-auth>
    </resource-ref>
</web-app>
```

## deploy on tomcat

Tomcat

- copy war file to `webapps` directory