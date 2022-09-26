# pojo

- Plain Prdinary Java Object: 普通的Java对象

## Pojo In Project

- 项目中用来表示特定字段的实体, 通常用在查询返回值
- Pojo类对应实体类的查询字段, 也就是说: 
  - 实体类对应数据库中的一张表
  - 一个实体可以对应多个Pojo类
  - 一个Pojo类由实体类的某些属性的集合组成
- pojo类命名: 为实体类名 + DO/DTO/VO
  - VO: View Object-展示对象 
  - DTO: Data Transfer Object-用于传输数据
  - DO: Data Object-用于数据访问

> 使用DTO传输数据时，需要将DTO的属性复制到对应的entity类中，BeanUtils工具类提供了简化实现

## 编写规范

- 所有属性私有
- 提供的getter和setter方法
  - getter方法以get开头
  - setter方法以set开头
  - 以驼峰法命名
- 重写equals()和hashCode()方法
- 必须实现Serializable接口
- 建议重写toString()

## 参照数据库类型设计实体类

|MySQL中的数据类型|Java中的数据类型|
|--|--|
|tinyint, smallint, int|Integer|
|bigint|long|
|char/varchar/text|String|
|datetime|LocalDateTime|
|decimal|BigDecimal|


id设置java中为Long类型，数据库中为bigint类型, 不用int因为int取值范围为-2147483648~2147483647不够用而bigint取值范围为-9223372036854775808~9223372036854775807，所以id用Long类型

## 使用

- SpringBoot中使用使用[Lombok](Lombok.md)框架自动生成java类属性的
