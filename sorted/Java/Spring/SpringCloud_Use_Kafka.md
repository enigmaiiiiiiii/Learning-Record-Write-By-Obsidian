# SpringBoot中使用kafka

## 依赖

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

## 配置

```yml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      # 消息前缀，必需，但不影响code
      group-id: tmp-producer-group
    consumer:
      # 消息前缀，必需，但不影响code
      group-id: tmp-consumer-group
```

## code

发送消息

- `KafkaTemplate<K, V>`: kafkaTemplate抽象模型

```java
public class KafkaProducer {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void send() {
        String topic = "test";
        String message = "hello kafka";
        kafkaTemplate.send(topic, message);
    }
}
```

- topic: 消息主题
- message: 消息内容

接收消息

- `@KafkaListener(topics = "test")`: 用在方法上，监听test主题的消息

```java
@KafkaListener(topics = "test")
public void received(ConsumerRecord<String, String> record) {
    String data = record.value();
}
```