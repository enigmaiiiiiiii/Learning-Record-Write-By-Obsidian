# Quartz

[时钟表达式](http://cron.ciding.cc/)

```java
@Configuration
public class QuartzConfig {
    @Bean
    public JobDetail showTime() {
        System.out.println("------ show time execute -----");

        return JobBuilder.newJob(ShowTimeJob.class)
                .withIdentity("showTimeJob")
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger showTimeTrigger() {
        System.out.println("------ show time trigger -----");

        CronScheduleBuilder cron = CronScheduleBuilder.cronSchedule("0/5 * * * * ?");
        return TriggerBuilder.newTrigger()
            .forJon(showTime())
            .withIdentity("dateTrigger")
            .withSchedule(cron)
            .build();
    }
}
```

## 配置Spring组件

**JobDetail**组件: 描述定时任务

```java
@Bean
public JobDetail showTime() {

    return JobBuilder.newJob(ShowTimeJob.class)
            .withIdentity("showTimeJob")
            .storeDurably()
            .build();
}
```

- `newJob()`: 创建Job接口实现类
- `withIdentity()`: 为JobDetail设置唯一标识

Trigger组件: 触发定时任务

```java
@Bean
public Trigger trigger() {

    CronScheduleBuilder cron = CronScheduleBuilder.cronSchedule("0 40 10 * * ?");
    return TriggerBuilder.newTrigger()
            .forJob(jobDetail())
            .withIdentity("dateTrigger")
            .withSchedule(cron)
            .build();

}
```

- CronScheduleBuilder.cronSchedule("0 40 10 * * ?"): 设置**时钟表达式**
- forJob(JobDetail jobDetail): 指定JobDetail
- withIdentity(String name, String group): 指定Trigger的名字和组
- withSchedule(CronScheduleBuilder cronScheduleBuilder): 通过**时钟表达式**指定触发规则

## 定时任务

- 实现Job接口
- 实现execute()方法
- 作为上一条内容的JobBuilder.newJob()方法的参数

```java
public class ShowTimeJob implements Job {

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        // Scheduled Task
    }

}
```

