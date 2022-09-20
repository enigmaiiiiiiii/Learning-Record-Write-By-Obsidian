# 注解列表

## 通用注解

- `@Value("${key}")`: 获得配置文件中的值, 用`${}`取值

## MVC注解

`@Controller`
`@ResquestMapping(String str)`
`@ResponseBody`: 方法返回字符串作为响应内容
`@RestController()`
`@Autowired`

## MyBatis注解

- `@Mapper`
- `@Insert(String sql)`
  - sql: 执行插入功能sql语句字符串
  - 参数中的`#{}`类似于在JDBC用一个包含`?`的字符串创建一个PreparedStatement对象
- `@Result(column="old_price", properties="oldPrice")`: 在列和属性名之间建立映射关系

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

