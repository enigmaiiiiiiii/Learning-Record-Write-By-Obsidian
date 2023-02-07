# Elasticsearch Repository

- 连接Elasticsearch的接口, 类似Mybatis中的`@Mapper`
- 继承`ElasticsearchRepository<item, Long>`接口
  - item表示自定义的Pojo类
- 接口中提供查询功能的**抽象方法**
- 查询细节体现在方法名中
  - 命名规则: `query{实体类}By{属性}Matches(String matchstr)`
  - 返回值`Iterable<T>`

```java
@Respository
public interface ItemRepository extends ElasticsearchRepository<Item, Long> {

    /**
     * 根据title查询
     * @param title
     * @return
     */
    Iterable<Item> queryItemsByTitleMatch(String title);

}
```

使用ItemRopository

```java
@Autowired
ItemRepository itemRepository;

public void test() {

    itemRespository.save(new Item(1L, "小米手机"));

}
```

## 查询方法

[Elasticsearch查询](springdata-elasticsearch-query.md)


