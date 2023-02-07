# SpringBoot项目中的mapper

- 定义sql类数据库映射接口

```java
public interface UserMapper {
    @Select("SELECT * FROM user WHERE id = #{id}")
    User getUserById(int id); // 1

    int addUser(User user);   // 2
}
```

- ①使用注解定义sql语句
- ②使用MyBatis的xxxmapper.xml[映射文件](springboot-project-workflow-resources.md#sql映射文件)定义sql语句
