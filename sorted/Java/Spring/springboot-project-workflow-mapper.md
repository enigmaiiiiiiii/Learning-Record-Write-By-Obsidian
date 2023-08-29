# SpringBoot Workflow - Repository Layer

- define the interface access to database

```java
public interface UserMapper {
    @Select("SELECT * FROM user WHERE id = #{id}")
    User getUserById(int id); // ①

    int addUser(User user);   // ②
}
```

2 ways to define sql statement

- ①  use annotation to define sql statement
- ②  use MyBatis's [mapper file](mybatis-sql-mapping-file.md) xxxmapper.xml to define sql statement

