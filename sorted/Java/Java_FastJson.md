# fastjson

## 引入依赖

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.75</version>
</dependency>
```

## 使用

- JSON.toJSONString(Object obj): 将对象转换为json字符串
- JSON.parseArray(String json, Class<T> clazz): 将json字符串转换为T类型元素组成的列表
  - 参数json: json字符串
  - 参数clazz: 要转换对象类型
