# SQL映射文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">
  <select id="selectBlog" resultType="Blog">
    select * from Blog where id = #{id}
  </select>
</mapper>
```
> org.mybatis.example.BlogMapper: Mapper接口的全限定名
> selectBlog: 与Mapper接口组成方法的完全限定名org.mybatis.example.BlogMapper.selectBlog

- namespace: Mapper接口的全限定名, 接口名在全局唯一的条件下有效
- id: 与Mapper接口组成方法的完全限定名, 方法名在全局唯一的条件下有效

## resultMap标签和result标签

- 用于建立返回值映射
- `<resultMap>`: 建立java类的属性和数据库表的字段的映射关系
  - `<result />`: 建立pojo类中columnName和数据库中column_name名映射

> 建议所有属性名和数据库中列名建立映射关系

```xml
<mapper namespace="">
    <select id="methodName" resultType="classId">
        <!-- sql statement -->
    </select>
    <resultMap id="classId" type="package.path.className">
        <result column="colmumn_name" property="columnName">
    </resultMap>
</mapper>
```

`<resultMap>`

- id: 映射关系的名称
- type: 被映射的类的全限定名

`<result>`

`<result>`

- column: 数据库中的列名
- property: 类中的属性名

## select标签 

属性

- resultType: 返回值类型
- resultMap: 指定返回类型映射关系

## insert标签

属性

- useGeneratedKeys="true": 是否使用自动生成的主键
- keyProperty="id": 返回值的自动生成的主键赋值给参数的id属性

## delete

## sql标签 and include标签

- `<sql>`: 用于抽取重复的sql片段
- `<include>`: 用于引用sql片段

```xml
<sql id="userColumns">
    id, username, password, email, phone, age, sort
</sql>
<include refid="userColumns">
```
