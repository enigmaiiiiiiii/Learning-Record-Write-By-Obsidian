# Query Method

## 查询步骤

1. 声明一个接口扩展**Repository接口**或者**继承自Repository接口**

- 泛型的类型参数为实体类和主键类型

```java
interface PersonRepository extends Repository<Person, Long> { … }
```

2. 在接口中声明方法

```java
interface PersonRepository extends Repository<Person, Long> {
  List<Person> findByLastname(String lastname);
}
```

## 定义查询方法

- 

```java
interface PersonRepository extends Repository<Person, Long> {

  List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);

  // Enables the distinct flag for the query
  List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
  List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);

  // Enabling ignoring case for an individual property
  List<Person> findByLastnameIgnoreCase(String lastname);
  // Enabling ignoring case for all suitable properties
  List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);

  // Enabling static ORDER BY for a query
  List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
  List<Person> findByLastnameOrderByFirstnameDesc(String lastname);
}
```

## @Query

- 用来避免过长的查询方法名

```java
@Query("query statement")
Page<Person> querySearch(String name);
```

```java
@Query(
    "{\n" + 
    "    \"bool\": {\n" +
    "        \"should\": [\n" +
    "            { \"match\": { \"name\": \"?0\" } },\n" +
    "            { \"match\": { \"title\": \"?1\" } }\n" +
    "        ]\n" +
    "    }\n" +
    "}")
Iterable<Article> querySearch(String name, String title);
```

