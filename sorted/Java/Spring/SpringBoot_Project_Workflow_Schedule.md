# 定时任务

- 定时任务

> 如定时刷新Redis缓存

## 启用计划任务

```java
@Configuration
@EnableScheduling
public class ScheduleConfiguration {

}
```

## 添加定时任务

- 可以定义一个**Spring组件**类专门用来执行定时任务
- 通过`@Scheduled`注解来定义定时任务
  - `@Scheduled(fixedRate = 1000 * 60)`: 上一次开始执行时间点之后1分钟再执行

```java
@Component
public class ScheduleTask {

    @Scheduled(cron = "0 0 0 * * ?")
    public void refreshRedisCache() {
        // do something
    }
}
```

## Cron表达式

- `0 5 10 * * ?` 每天10点5分0秒执行
- `0 5 10 ? * 1` 每周一10点5分0秒执行
