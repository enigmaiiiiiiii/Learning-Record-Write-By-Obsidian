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
logging.level.org.elasticsearch.client.RestClient: debug
```

## 添加实体类

- 添加到Elasitcsearch的实体类
- 保证既有**无参构造器**，又有**全参构造器**
- 注解实体类`@Document(indexName = "索引名", type = "类型名", shards = 5, replicas = 1, refreshInterval = "-1")`
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
@Accessors(chain = true)
public class Item {
    private Long id;
    private String title;
}
```

添加`@Field`注解

```java
@field(
    type = FieldType.Text,
    analyzer = "ik_max_word",
    searchAnalyzer = "ik_max_word")
private String title;
```

- `@Field(type = FieldType.text, name = "property_name", analyzer = "ik_max_word", searchAnalyzer = "ik_max_word")`
  - type: 字段类型
  - name: 字段名称, 命名
  - analyzer: 分词器
  - searchAnalyzer: 搜索分词器

## 使用Repository

- SpringData提供的通用持久层接口

[SpringDataRepository](SpringData_Elasticsearch_Repository.md)

## 关于注解的详细解释

- `@Document`: 用于标记实体类, 标识该类是映射到数据库的候选类, 注解参数
  - indexName: 索引名
  - createIndex: 是否创建索引
  - versionType: 版本类型, 默认`EXTERNAL`
- `@Id`: 标记字段，标识该字段为主键
- `@Transient`: 标记字段，标识该字段不会被映射到[ES文档](Elasticsearch_Terms.md#document(文档))中
- `@PersistenceConstructor`
- `@Field`: 
  - name: elasticsearch的字段名称, 默认为Java字段名
  - type: 字段类型, 默认为`FieldType.Auto`
  - format: 日期格式化
  - pattern: 自定义日期格式化
  - store: 是否保存原始值, 默认为`false`
  - analyzer: 分词器
  - searchAnalyzer: 搜索分词器
  - normalizer: 归一化器

@Field(type = FieldType.Date, format={}, pattern="dd.MM.uuuu"): dd.MM.uuuu

## 同步数据库

[ ] TODO
