# 使用

## 在Spring中使用

[使用XML文件映射SQL语句](MyBatis_SQL_Mapping_File.md)

[动态SQL语法](MyBatis_Dynamic_SQL.md)

## 使用java API

- 将`mybatis-x.x.x.jar`文件置于[类路径](Java_Command_Javac.md)中即可
- 或通过Maven构建项目, 在`pom.xml`中添加依赖

```xml
<dependency>
    <groupId></groupId>
    <artifactId></artifactId>
    <version></version>
</dependency>
```

## 通过注解映射

- 定义mapper.SampleMapper接口

```java
public interface SampleMapper {
    int selectById(int id);
    int insert(Sample sample);
}
```
- 返回类型
  - int: 执行增, 删, 改时返回影响的行数, 建议类型
- 方法不要使用重载
