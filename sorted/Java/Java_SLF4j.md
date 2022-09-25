# SLF4j

## spring中使用SLF4j日志

- 添加Lombok依赖
- 在任何类上添加`@Slf4j`注解
- 使用`log.info("log info")`, `log.debug("log info")`等方法

## 日志级别

严重程度从低到高:

- trace
- debug
- info
- warn
- error

Spring中配置日志显示级别

- 在`application.properties`中添加`logging.level.packageName=<log level>`
  - packageName: 作用域, 可以是包名, 也可以是类名

```
logging.level.root=info
```




