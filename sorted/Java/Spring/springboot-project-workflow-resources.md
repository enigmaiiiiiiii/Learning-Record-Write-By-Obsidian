# Spring Boot Workflow - Resources

## What Is Resources Directory For

store resource file

- sql statement mapper file, like `FooMapper.xml`
- SpringBoot Config File: `application.yml`

Resources directory structure looks like:

```
resources
├── application.yml
└── mapper
    └── FooMapper.xml
```


## Take A Look At SQL Mapper File

`<mapper>` element

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

- attribute `namespace`: specify the [mapper interface]() of the mapper file

Write SQL Statement In `<select>` Element

- For example select list, usually sort the result

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

- `id`: specify the [method name] of the mapper interface
- `resultMap`: specify the [result map]() of the mapper file
