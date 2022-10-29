# Pojo

- 用于存放实体类
- 子目录
- 使用[lombok](../Lombok.md)的`@Data`注解, 自动生成getter, setter, toString, equals, hashCode方法
- 属性类型应[参照数据库字段类型](../Java_Pojo.md#参照数据库类型设计实体类)

## entity目录

- DemoEntity.java: 实体类
- 对应数据库字段(列)

## vo目录

- 传输方向: 数据库->前端
- 可能包含的vo类
  - DemoEntityStandardVO.java: 查询详情
  - DemoEntityListItemVO.java: 查询列表
- 属性不一定对应数据库字段(列)

## dto目录

- 传输方向: 前端->数据库
- 可能包含的dto类
  - DemoEntityCreateDTO.java: 创建
  - DemoEntityUpdateDTO.java: 更新
- 属性不一定对应数据库字段(列), 如涉及多表操作时

