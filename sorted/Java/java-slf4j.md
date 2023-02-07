# SLF4j

## spring中使用SLF4j日志

- 添加[Lombok](lombok.md)依赖
- 在任何类上添加`@Slf4j`注解
- 使用`log.info("log info")`, `log.debug("log info")`等方法

## 日志级别

严重程度从低到高:

- trace
- debug
- info
- warn
- error

配置作用域

- 在`application.properties`中添加`logging.level.packageName=<log level>`
  - packageName: 作用域, 可以是包名, 也可以是类名

Spring中配置日志显示级别

```yml
logging.level.scope.name: info
```

- package.scope: 作用域, 可以是包名, 也可以是类名

## 日志格式化输出

- log.trace(String format, Object... args)
  - format: 格式化字符串, 以`{}`表示占位符
  - args: 参数对应占位符的顺序

```java
int x = 1;
int y = 2;
log.trace("{} + {} = {}", x, y, x + y);
```


