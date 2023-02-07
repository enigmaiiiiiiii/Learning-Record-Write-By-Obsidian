# Maven AntRun Plugin

## What is Ant

- Ant is a Java based build tool.
- configure build process in XML files.

## add AntRun plugin to pom.xml

An example write target in pom.xml `<configuration/>`

- zip `*.jar` file 
- from project target directory
- to `package.zip` in project directory

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-antrun-plugin</artifactId>
        <version>1.8</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>run</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <target>
            <echo>hello world</echo>
            <zip destfile="${project.basedir}/package.zip"
              basedir="${project.build.directory}"
              includes="*.jar">
          </target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

## Copy Jar File To specific Directory

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>1.8</version>
    <executions>
        <execution>
            <phase>package</phase>
            <configuration>
                <target>
                    <copy file="target/demo.jar" tofile="../lib/demo.jar"/>
                </target>
            </configuration>
            <goals>
                <goal>run</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

- copy `demo.jar` to `../lib/demo.jar`

## use Ant build.xml

configure build process in `build.xml`

- build.xml
- below example
  - upload `*.zip` file to ftp server
  - from project base directory

```xml
<project name="MyProject" default="dist" basedir=".">
   <description>Project Description</description>
   ...
    <target name="ftpArtifact">
        <ftp
          server="${ftp.host}"
          userid="${ftp.user}"
          password="${ftp.password}">
            <fileset dir="${project.basedir}">
                <include name="**/*.zip"/>
            </fileset>
        </ftp>
    </target>
</project>
```

pom.xml

- add ftp dependency in jar

```xml
<plugin>
    <executions>
       ...
    </executions>
    <dependencies>
        <dependency>
            <groupId>commons-net</groupId>
            <artifactId>commons-net</artifactId>
            <version>1.4.1</version>
        </dependency>
        <dependency>
            <groupId>org.apache.ant</groupId>
            <artifactId>ant-commons-net</artifactId>
            <version>1.8.1</version>
        </dependency>
    </dependencies>
</plugin>
```
