# SQL映射文件

- 一个映射文件对应一个接口

## \<mapper>

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

## \<select>

属性

- resultType: 返回值类型
- resultMap: 指定返回类型映射关系

## \<insert>

属性

- useGeneratedKeys="true": 是否使用自动生成的主键
- keyProperty="id": 返回值的自动生成主键, 赋值给映射方法参数的id属性

## \<delete>

## \<update>

属性

- id: 映射方法

可选属性

- parameterType: 指定参数类型
- useGeneratedKeys="true": 是否使用自动生成的主键
- keyProperty="id": 返回值的自动生成主键, 赋值给映射方法参数的id属性

技巧

- 搭配`<if>`使用忽略参数对象中的空值

## \<sql> and \<include>

- `<sql>`: 用于抽取重复的sql片段
- `<include>`: 用于引用sql片段

```xml
<sql id="userColumns">
    id, username, password, email, phone, age, sort
</sql>
<include refid="userColumns">
```
## \<resultMap>和\<result>

- `<resultMap>`: 建立**java类的属性**和**数据库表的字段**的映射关系
  - `<result />`: 建立pojo类中columnName和数据库中column_name名映射

> 建议所有属性名和数据库中列名建立映射关系

```xml
<mapper namespace="">
    <select id="methodName" resultType="classId">
        <!-- sql statement -->
    </select>
    <resultMap id="classId" type="package.path.className">
        <id column="id" property="id" />
        <result column="colmumn_name" property="propName">
        <collection 
            property="propName" 
            ofType="elementType"  <!-- 集合元素类型 -->
            > 
            <constructor>
                <arg column="column_name"></arg>
            </constructor>
        </collection>
    </resultMap>
</mapper>
```

`<resultMap>`

- id: 映射关系的名称
- type: 被映射的类的全限定名

`<result>`

- column: 数据库中的列名
- property: 类中的属性名

`<id>`

- 用于标识主键
- column: 数据库中的列名
- property: 类中的属性名

`<collection>`

- 用于标识一对多(list, set)的关系
- property: 类中的属性名
- ofType: 类中属性保存的元素类型

`<constructor>`

- 使用构造方法创建对象

`<arg>`

- column: 数据库中的列名  
