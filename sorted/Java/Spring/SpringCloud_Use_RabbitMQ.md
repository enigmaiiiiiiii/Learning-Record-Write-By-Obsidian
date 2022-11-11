# RabbitMQ

## dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

## config application.yml

```yml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
    virtual-host: /
```

## code

### 配置类, 用于创建队列, 交换机, 绑定的spring组件

```java
@Configuration
public class RabbitMQConfig {

    public static final String EXCHANGE_NAME="demoexchange";
    public static final String ROUT_NAME="demoroute";
    public static final String QUEUE_NAME="demoqueue";

    @Bean
    public DirectExchange stockDirectExchange(){
        return new DirectExchange(EXCHANGE_NAME);
    }
    @Bean
    public Queue stockQueue(){
        return new Queue(QUEUE_NAME);
    }

    @Bean
    public Binding stockBinding(){
        return BindingBuilder.bind(stockQueue()).
                        to(stockDirectExchange()).with(ROUT_NAME);
    }
}
```

> 一般声明路由, 交换机, 队列名称为常量

- `DirectExchange(String name)`: 命名交换机
- `Queue(String name)`: 命名队列
- `BindingBuilder.bind(Queue queue).to(DirectExchange exchange).with(String routingKey)`: 绑定交换机和队列

### 发送消息

使用**rabbitTempate**: spring提供的用于发送消息的组件

```java
public void sendMsg(String msg){
    // 发送消息
    rabbitTemplate.convertAndSend(
        RabbitMQConfig.EXCHANGE_NAME,
        RabbitMQConfig.QUEUE_NAME,
        msg);
}
```

- convertAndSend(String exchange, String routingKey, Object message): 发送消息

### 接收消息

使用`@RabbitListener`注解, 注解类, 监听队列, 接收消息

`@RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)`

- 注解参数queue: 监听的队列名称

使用`@RabbitHandler`注解, 注解监听方法, 处理消息

- 方法的参数类型为消息的类型

```java
@Component
@RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
public class RabbitMQConsumer {

    @RabbitHandler
    public void receiveMsg(Object msg){
        System.out.println("receive msg: "+ msg);
    }
}




