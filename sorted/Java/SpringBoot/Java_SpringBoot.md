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

`@Controller`
`@ResquestMapping(String str)`
`@ResponseBody`: 方法返回字符串作为响应内容
`@RestController()`
`@Autowired`

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

- `@autowired`: 自动装配

## SpringMVC

1. `@Controller`注解类中的`@RequestMaping(String str)`注解的方法

- 执行客户端指定的方法的方法
  - \<form>标签的`action="/method"`属性
  - \<a>标签`href="/method"`属性
  - ajax请求url属性值
- str参数: url请求中的路径 

> 比如: 客户端发送http://host/name?param1=value1&param2=value2请求后, 将执行`@RequestMapping("/name")`注解的方法

2. `@Mapper`注解接口中的`@Select(String sql), @Update(String sql), @Insert(String sql)`方法

- 完成JDBC中的SQL语句执行过程
- 方法参数名称匹配sql字符串参数中的`#{}`
- 返回对象时, 调用被实例化的对象的无参构造函数, 并按参数名调用属性的setter方法

3. `@Autowired`注解的属性

- 完成mapper实例化
