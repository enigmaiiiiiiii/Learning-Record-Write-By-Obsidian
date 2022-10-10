# Resources

- 存放资源文件, 如sql语句映射文件(mapper.xml), 配置文件等
- 配置SpringBoot: `application.yml`
- 配置MyBatis SQL语句映射: `resource/mapper/FooMapper.xml`

resource
|  application.yml
|__mapper
     FooMapper.xml


## sql映射文件

\<mapper>

- namespace: 指定映射文件对应的Mapper接口

```xml
<mapper namespace="packageof.interface.EntityMapper">
    <insert> <!--  --> </insert>
    <delete> <!--  --> </delete>
    <select> <!--  --> </select>
    <update> <!--  --> </update>
    <sql> <!--  --> </sql>
    <resultMap> <!--  --> </resultMap>
</mapper>
```

**查询列表, 通常对结果进行排序**

```xml
<select id="list" resultMap="ListResultMap">
    SELECT 
        * 
    FROM 
        entity_tbl
    ORDER BY
        col_name DESC

</select>
```
