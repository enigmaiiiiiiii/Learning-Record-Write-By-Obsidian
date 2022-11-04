# 查询方法

[语法参考](SpringData_Query_Method.md)

## 父接口提供的查询

`Iterable<T> findAll()`: 查询所有
`Iterable<S> saveAll(Iterable<S> entities)`: 添加到Elasticsearch, S是子类

## 自定义查询

- 通过方法名表示查询方式，如：queryByTitle(String title)表示根据title查询
- 方法关键词
  - And: queryItemsByTitleMatchesAndPriceMatches(String title, Double price)
  - Or: queryItemsByTitleMatchesOrPriceMatches(String title, Double price)
  - OrderBy: queryItemsByTitleOrderByPriceDesc(String title) 表示根据title查询并按照price降序排序
  - ...

## 分页查询

- 由查询抽象方法 + [Page<T>](SpringData_API.md#Page)返回类型组成

```java
int page = 1;
int pageSize = 10;
// 查询第一页，每页10条数据
Page<Item> pages = itemRepository.queryItemsByTitleMatches(String title, PageRequest.of(page, pageSize));

// 分页信息
pages.forEach(item -> System.out.prinln(item));
```

