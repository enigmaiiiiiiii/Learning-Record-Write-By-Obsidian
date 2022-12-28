# Controller

- 使用[RESTful](../RESTful.md)设计风格

## 功能

- 处理网络请求
- 返回响应

## detail

一个controller类看起来是这样的

```java
@RestController
@RequestMapping("/prefix")
public class SampleController {

    @GetMapping("/name")
    public String sampleMethod(String arg1, int arg2) {
        return "value";
    }
}
```
- `@RestController`注解类(.java文件), 表示该类处理网络请求
- `@RequestMapping("/prefix")`, `@GetMapping("/name")` 共同组成请求资源的url
  - `@RequestMapping("/prefix")`注解在类上, 用于定义类中的所有方法的请求资源的**前缀**部分
  - 用`@GetMapping("/name")`, `@PostMapping("/name")` 等衍生注解来定义请求资源的后缀部分

对于只有一个参数的url, 且参数值不需要保护, 推荐将参数作为url资源描述的一部分

```java
public class SampleController {

    @GetMapping("/name/{arg1}")
    public String sampleMethod(@PathVariable String arg1) {
        return "value";
    }
}
```

- `@PathVariable`注解参数, 表示从url中获取参数值


`@RequestMapping(value)`注解的value取值规范

- 类上用来表示被处理的实体类, `@RequestMapping("/entity")`
- 方法上用来表示被处理的实体类的操作, `@RequestMapping("/{option_arg}/create")`, option_arg是操作的参数

如果使用`@Controller`注解类, 则需要在方法上使用`@ResponseBody`注解, 表示返回的是响应体

## 细节

- 方法参数默认接收格式[url查询格式](../Network/Http_URL_And_URI.md#查询)
  - 对于url查询格式为`?name=val1&age=val2`
    - 如果参数形式为`(String name, int age ...)`, 则name=val1, age=val2
    - 如果是对象参数, 会使用对象的setName(val1)和setAge(val2)方法设置属性值
- 方法参数注解`@RequestBody`时, 要求请求格式为[json格式](../结构化数据/json.md)

## 接口文档Annotation

