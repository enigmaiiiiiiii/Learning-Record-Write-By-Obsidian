# 动态SQL

- 简化SQL语句, 一条语句处理不同场景,易于维护

## \<foreach>

属性

- separator: SQL语句循环部分的分隔符
- item: 循环变量
- collection: 集合类型
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

## \<if>

> 没有else标签

- test: 条件表达式, 被解析为java代码

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

## \<where>

- 只会在子元素有返回内容的时候才会添加where关键字
- 会清除多余的and或or

## \<set>

- 使用if语句后, 会出现多余的逗号, set标签清除无关的逗号

```xml
<set>
    <if test="title != null">title = #{title},</if>
    <if test="author != null">author = #{author},</if>
    <if test="date != null">date = #{date},</if>
</set>
```

等价的trim

```xml
<trim prefix="set" suffixOverrides=",">
  ...
</trim>
```

## \<trim>



