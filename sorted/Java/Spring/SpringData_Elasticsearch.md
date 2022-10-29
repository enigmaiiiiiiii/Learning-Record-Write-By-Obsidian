# Spring Data Elasticsearch

## pom依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

## 配置

```yml
Spring.elasticsearch.rest.uris: http://localhost:9200

# elasticsearch日志显示级别
logging.level.org.elasticsearch. client.RestClient: debug
```

## 添加实体类

- 添加到Elasitcsearch的实体类
- 保证既有**无参构造器**，又有**全参构造器**
- `@Document(indexName = "索引名", type = "类型名", shards = 5, replicas = 1, refreshInterval = "-1")`
    - indexName: 索引名
    - ~~type: 类型名~~
    - ~~shards: 分片数~~
    - ~~replicas: 副本数~~
    - ~~refreshInterval: 刷新间隔~~

```java
@Data
@Document(indexName = "item")
@NoArgsConstructor
@AllArgsConstructor
@Accessor(chain = true)
public class Item {

    private Long id;
    private String title;

}
```
添加\@Field注解

```java
@field(
    type = FieldType.Text,
    analyzer = "ik_max_word",
    searchAnalyzer = "ik_max_word")
private String title;
```

- `@Field(type = FieldType.Text, analyzer = "ik_max_word", searchAnalyzer = "ik_max_word")`
    - type: 字段类型
    - analyzer: 分词器
    - searchAnalyzer: 搜索分词器

## 添加Repository

[SpringDataRepository](SpringData_Elasticsearch_Repository.md)

