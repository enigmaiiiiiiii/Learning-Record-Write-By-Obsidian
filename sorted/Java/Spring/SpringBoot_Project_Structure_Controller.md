# Controller

- 功能
  - 处理网络请求
  - 返回响应
  - 处理异常, catch语句块
- 使用[RESTful](../RESTful.md)设计风格
- 包含`@RestController`注解的类(.java文件), 和`@XXXMapping`注解的方法
- 通常`@RequestMapping("/prefix")`注解在类上, 用于定义类中的所有方法的请求资源的前缀部分
- 用`@GetMapping("/name")`, `@PostMapping("/name")` 等衍生注解来定义请求资源的后缀部分
- 对于只有一个参数的url推荐将参数作为url资源描述的一部分
- `@RequestMapping(value)`注解的value取值规范
  - 类上用来表示被处理的实体类, `@RequestMapping("/entity")`
  - 方法上用来表示被处理的实体类的操作, `@RequestMapping("/{option_arg}/create")`, option_arg是操作的参数