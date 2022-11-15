# RestTemplate

- 能够发送请求到指定url路径的工具

## 在spring中使用

restTemplate组件 

```java
@Bean
@LoadBalanced //开启负载均衡
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```

## code example

```java
Object res = restTemplate.getForObject("http://localhost:8080/user/?key1={1}&key2={2}", User.class, arg1, arg2);
```
