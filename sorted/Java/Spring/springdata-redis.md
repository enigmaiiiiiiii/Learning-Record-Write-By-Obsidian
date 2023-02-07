# SpringBoot中使用Redis

## 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

## 暂时没有修改配置文件

## 配置RedisTemplate组件

```java
@Configuration
public class RedisConfiguration {

    @Bean
    public RedisTemplate<String, Serializable> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Serializable> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.setKeySerializer(RedisSerializer.string());
        redisTemplate.setValueSerializer(RedisSerializer.json());
        return redisTemplate;
    }
}
```

- setKeySerializer(RedisSerializer.string()): 设置key的序列化方式
- setValueSerializer(RedisSerializer.json()): 设置value的序列化方式

## RedisTemplate<K, V>: 连接管理和数据操作

[RedisTemplate](springdata-redis-redistemplate.md)

## 启动后加载缓存

- 设置[预加载](springboot-project-workflow-prebuild.md)
- 设置[定时任务](springboot-project-workflow-schedule.md)

## 异常

- RedisCommandExecutionException




