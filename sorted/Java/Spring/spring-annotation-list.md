# 注解列表

- [`@Value("${key}")`](#valuekey)
- [`@ControllerAdvice`](#controlleradvice)
- [`@ExceptionHandler`](#exceptionhandler)
- [`@Controller`](#controller)
- [`@ResquestMapping(String str)`](#resquestmappingstring-str)
- [`@ResponseBody`](#responsebody)
- [`@RequestBody`](#requestbody)
- [`@RestController`](#restcontroller)
- [`@Autowired`](#autowired)
- [`@ResponseBody`: 方法返回字符串作为响应内容](#responsebody-方法返回字符串作为响应内容)
- [`@RestController()`](#restcontroller-1)
- [`@Autowired`](#autowired-1)
- [`@Mapper`](#mapper)
- [`@Insert(String sql)`](#insertstring-sql)
- [`@Result`](#result)
- [@Configuration](#configuration)
- [@Service](#service)
- [@JsonInclude](#jsoninclude)
- [@Scheduled](#scheduled)


> 遵循[java注解语法](java-annotation.md)

## `@Value("${key}")`

- 获得配置文件中的值, 用`${}`取值

## `@ControllerAdvice`

## `@ExceptionHandler`

## `@Controller`

## `@ResquestMapping(String str)`

```java
public @interface RequestMapping {
    String[] value() default {};
    String name() default "";
    String[] path() default {};
    RequestMethod[] method() default {};
    String[] params() default {};
    String[] headers() default {};
    String[] consumes() default {};
    String[] produces() default {};
}
```

- 可以注解在**类**上, 也可以注解在**方法**上
- value: 表示资源名称, 最终请求地址由类上注解的value和方法上注解的value拼接而成
  - 可以是数组, 表示同一种资源可以匹配多个请求路径
  - `{arg_name}`表示参数占位符, 用来匹配请求中不确定的参数, 并在请求方法的**参数**中使用`@PathVariable`注解表示参数来自url中的占位符
    - `{arg_name}`: arg_name对应**方法参数名**
    - 可以使用`{arg_name: regex}`匹配正则表达式(regex), 多个正则表达式不能有交集
  - 优先匹配不包含占位符的资源名
- method: 表示允许的[请求方式](../../network/http-request-message.md#请求行), 默认不限制请求方式
  - `@RequestMapping(value="/list", method=RequestMethod.GET)`: 表示只允许GET请求

## `@ResponseBody` 

- 注解方法返回字符串内容作为响应体内容

## `@RequestBody`

- 注解方法参数, 表示参数来自解析格式为json的请求体

## `@RestController`

## `@Autowired`

## `@ResponseBody`: 方法返回字符串作为响应内容

## `@RestController()`

## `@Autowired`

## `@Qualifier`

## `@Mapper`

## `@Insert(String sql)`

- sql: 执行插入功能sql语句字符串
- 参数中的`#{}`类似于在JDBC用一个包含`?`的字符串创建一个PreparedStatement对象

## `@Result`

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
- `@MapperScanner(String str)`: 指定包下的所有接口为mapper接口

## `@Configuration`

## `@Service`

## `@JsonInclude`

- `@JsonInclude(JsonInclude.Include.NON_NULL)`: 不序列化null值

## `@Scheduled`

- 用于方法
- `@Scheduled(fixedRate=1000)`: 每隔1s执行一次
- `@Scheduled(fixedDelay=1000)`: 上一次执行完毕后隔1s执行一次
- `@Scheduled(cron="0 0 0 * * ?")`: 每天0点执行一次

