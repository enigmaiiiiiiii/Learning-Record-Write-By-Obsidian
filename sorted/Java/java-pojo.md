# pojo

-   Plain Prdinary Java Object: 普通的 Java 对象

## Pojo In Project

-   项目中用来表示特定字段的实体, 通常用在查询返回值
-   Pojo 类对应实体类的查询字段, 也就是说:
    -   实体类对应数据库中的一张表
    -   一个实体可以对应多个 Pojo 类
    -   一个 Pojo 类由实体类的某些属性的集合组成
-   pojo 类命名: 为实体类名 + DO/DTO/VO
    -   VO: View Object 展示对象, ~~服务端$\rightarrow$客户端~~
    -   DTO: Data Transfer Object 用于传输数据, ~~客户端$\rightarrow$服务端~~
    -   DO: Data Object 用于数据访问

> 使用 DTO 传输数据时，需要将 DTO 的属性复制到对应的 entity 类中，BeanUtils 工具类提供了简化实现

## 编写规范

-   所有属性私有
-   提供的 getter 和 setter 方法
    -   getter 方法以 get 开头
    -   setter 方法以 set 开头
    -   以驼峰法命名
-   重写 equals()和 hashCode()方法
-   必须实现 Serializable 接口
-   建议重写 toString()

## 参照数据库类型设计实体类

| MySQL 中的数据类型       | Java 中的数据类型   |
| ---------------------- | ----------------- |
| tinyint, smallint, int | Integer           |
| bigint                 | long              |
| char/varchar/text      | String            |
| datetime               | LocalDateTime     |
| decimal                | BigDecimal        |

id 设置 java 中为 Long 类型，数据库中为 bigint 类型, 不用 int

因为 int 取值范围为-2147483648~2147483647 不够用而 bigint 取值范围为-9223372036854775808~9223372036854775807

所以 id 用 Long 类型

## 使用

-   SpringBoot 中使用使用[Lombok](lombok.md)框架自动生成 java 类属性的
