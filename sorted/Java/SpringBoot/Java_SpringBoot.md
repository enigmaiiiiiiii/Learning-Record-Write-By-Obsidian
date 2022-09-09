# SpringBoot

[Quick Start](https://spring.io/quickstart)

```
Group: com.example
Artifact: demo
Name: application name
Description: project Description
Package name: com.example.demo 
```

[SpringBoot项目目录结构](SpringBoot_Directory_Structrue.md)


## 注解

MVC注解

```java
@Controller
@ResquestMapping(String str)
@ResponseBody  // 方法返回字符串作为响应内容
@RestController()
@Autowired
```

MyBatis注解

- `@Mapper`
- `@Insert(String sql)`
  - sql: 执行插入功能sql语句字符串
  - 参数中的`#{}`类似于在JDBC用一个包含`?`的字符串创建一个PreparedStatement对象

```xml
<select id="selectPerson" parameterType= "int" resultType="hashmap">
Select * from person where id = #{id}
</select>
```

```java
String selectPreson = "Select * From PERSON Where ID = ?";
PreparedStatement ps = conn.prepareStatement(selectPreson);
ps.setInt(1, id);
```
