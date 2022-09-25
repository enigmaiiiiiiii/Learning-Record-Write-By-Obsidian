# 动态SQL

## foreach标签

属性

- separator: SQL语句循环部分的分隔符
- item: 循环变量
- collection: 循环变量, 取值
  - 映射方法的参数名称
  - 映射方法参数类型为集合, 取值可以为list, collection
  - 映射方法参数类型为数组, 取值可以为array

```xml
<select id="selectPostIn" result="domain.blog.Post">
    select * 
    from Post
    <where>
        <foreach item="item" index="index" collection="list" open="ID in (" separator="," close=")" nullable="ture">
            #{item}
        </foreach>
    </where>
</select>
```

```java
List<Post> selectPostIn(List<Post> posts);  // 1
List<Post> selectPostIn(Post... posts);     // 2
```

对于方法1: collection取值可以是posts, list, collection;
对于方法2: collection取值可以是posts, array;


## if标签

> 没有else标签

- test: 条件表达式, 被解析为代码, 一般将

```xml
<select id="findActiveBlogWithTitleLike" resultType="Blog">
    SELECT * FROM BLOG
    WHERE 
        state = "active"
    <if test="title != null">
        And title like #{title}
    </if>
</select>
```
如果出传入title参数, 等价的SQL语句: 

```sql
Select * from BLOG where state = "active" and title like #{title}
```
如果没有传入title参数, 等价的SQL语句:

```sql
Select * from BLOG where state = "active"
```

