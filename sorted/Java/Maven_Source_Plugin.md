# Maven Source Plugin

- 为源文件创建一个jar文档

```xml
<project>
  ...
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-source-plugin</artifactId>
        <version>3.2.1</version>
        <configuration>
          <outputDirectory>/absolute/path/to/the/output/directory</outputDirectory>
          <finalName>filename-of-generated-jar-file</finalName>
          <attach>false</attach>
        </configuration>
      </plugin>
    </plugins>
  </build>
  ...
</project>
```