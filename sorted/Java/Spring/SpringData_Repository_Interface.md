# Repository接口

## 管理实体类的CRUD操作接口

- 扩展自`Repository<T, ID>`

```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    Optional<T> findById(ID id);
    <S extends T> Iterable<S> saveAll(Iterable<S> entities);
    long count();
    void delete(T entity);
    boolean existsById(ID id);
}
```

- 提供了特定技术的Repository接口, 比如
  - JpaRepositroy
  - MongoRepository
  - ElasticsearchRepository

## PagingAndSortRepository

- 扩展自上一个接口

```java
public interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
    Iterable<T> findAll(Sort sort);
    Page<T> findAll(Pageable pageable);
}
PagingAndSortingRepository<User, Long> repo = new ....;
page<User> users = repo.findAll(PageRequest.of(1, 20));
```

- [Page<T>]是一个接口，提供了分页信息, 区别与[MyBatis中的PageHelper插件](Mybatis_PageHelper.md)的PageInfo类





