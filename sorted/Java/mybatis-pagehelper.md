# PageHelper

-  MyBatis 分页插件

## 引入依赖

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.13</version>
</dependency>
```

## 配置xml拦截器

**mybatis-config.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <plugins>
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>
</configuration>
```

## 使用

```java
public PageInfo<T> selectAll(int pageNum, int pageSize) {
    PageHelper.startPage(pageNum, pageSize);  // 1
    List<T> list = mapper.selectAll();        // 2
    return new PageInfo<>(list);              // 3
```

- 1. 通过 PageHelper 静态方法 startPage()设置分页参数
  - startPage(int pageNum, int pageSize)
  - pageNum: 页码
  - pageSize: 每页条数
-   2. 调用 Mybatis 接口 mapper 查询数据, PageHelper 会拦截查询, 并将分页参数添加到查询语句中
-   3. 通过 PageInfo 构造函数将查询结果封装为 PageInfo 对象

## PageInfo类

-   `PageInfo<T>`泛型
- 区别于[SpringData的Page<T>](springdata-api.md#page)

```java
public class PageInfo<T> {

    private int pageNum;            // 当前页码
    private int pageSize;           // 每页显示的记录数
    private int size;               // 当前页的记录数
    private int startRow;           // 当前页第一条记录在数据库中的行号
    private int endRow;             // 当前页最后一条记录在数据库中的行号
    private int pages;              // 总页数
    private int prePage;            // 上一页页码
    private int nextPage;           // 下一页页码
    private boolean isFirstPage;    // 是否为第一页
    private boolean isLastPage;     // 是否为最后一页
    private boolean hasPreviousPage;// 是否有前一页
    private boolean hasNextPage;    // 是否有下一页
    private int navigatePages;      // 导航页码数
    private int[] navigatepageNums; // 所有导航页号
    private int navigateFirstPage;  // 导航条上第一页页码
    private int navigateLastPage;   // 导航条上最后一页页码
}
```
