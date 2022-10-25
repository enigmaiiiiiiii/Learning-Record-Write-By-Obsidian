# 使用Dubbo

[Dubbo](Dubbo.md)

## 引入依赖

```xml
```

## 配置

```yml
dubbo:
  protocol:
    # port设置为-1 表示当前dubbo框架使用的端口自动寻找
    # 使用端口的规则是从20880开始寻找可用端口,如果当前端口号占用,就继续加1来使用,直到找到可用的为止
    port: -1
    # 设置连接的名称,一般固定为dubbo即可
    name: dubbo
  registry:
    # 指定当前Dubbo服务注册中心的类型和位置
    address: nacos://localhost:8848
  consumer:
    # 检查需要的Dubbo服务是否启动
    check: false
```

## 添加注解

- 使其它服务能够调用

@DubboService: 注解类, 用于暴露服务, 注册到nacos服务都可以访问当前类的方法
@EnableDubble: 注解启动类