# 流程

1. 配置springMVC

- 通过application.properties配置
  - 指定数据库连接信息，数据库软件, 端口号，数据库名称
  - 指定静态资源搜索路径

```
# 配置数据库
spring.datasource.url=jdbc:mysql://localhost:3306/cs?characterEncoding=utf8&serverTimezone=Asia/Shanghai&useSSL=false
spring.datasource.username=root
spring.datasource.password=root

# 配置静态资源搜索路径
spring.web.resources.static-locations=file:/upload/static, classpath:static

spring.servlet.multipart.max-file-size=10MB
```


2. `@Controller`注解类中的`@RequestMaping(String str)`注解的方法

- 执行客户端指定的方法的方法
  - \<form>标签的`action="/method"`属性
  - \<a>标签`href="/method"`属性
  - ajax请求url属性值
- str参数: url请求中的路径 

> 比如: 客户端发送http://host/name?param1=value1&param2=value2请求后, 将执行`@RequestMapping("/name")`注解的方法

3. `@Mapper`注解接口中的`@Select(String sql), @Update(String sql), @Insert(String sql)`方法

- 完成JDBC中的SQL语句执行过程
- 方法参数名称匹配sql字符串参数中的`#{}`
- 返回对象时, 调用被实例化的对象的无参构造函数, 并按参数名调用属性的setter方法

4. `@Autowired`注解的属性

- 完成mapper实例化

5. 异步请求

- `@RequestBody`参数注解
  - 将请求体中的json字符串转换为对象
- axios对象发送请求
  - get请求: `axios.get(url, {params: data})`
  - post请求: `axios.post(url, data)`
  - then方法: `axios.get(url).then(function(res){})`
    - res.data: 返回的数据
    - res.status: 状态码
    - res.statusText: 状态信息
    - res.headers: 响应头
    - res.config: 配置信息

## Model Part

- mapper类: 从数据库获得对象
  - 数据库语句
- java bean标准类类: 通常存放在entity, model目录中

## View Part

- 前端页面
- 发送get, post请求

## Controller Part

- 目录类似: controller
- 响应前端请求
- 调用mapper类, 完成java bean类的实例化
- 发送json字符串