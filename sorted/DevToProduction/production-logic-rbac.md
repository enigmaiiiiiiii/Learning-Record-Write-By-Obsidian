# RBAC

- RBAC: Role Based Access Control
- 广泛使用的关于**权限设计**的**数据库模型**
- 用户和权限逻辑分离, 两组多对多的关系
  - 用户可以扮演多个角色 
  - 不同角色可以拥有不同的权限

## 数据库设计

三个数据表: 用户, 角色, 权限

- user: 用户表
  - id: 用户id
  - name: 用户名
  - password: 密码
- role: 角色表
  - id: 角色id
  - role_id: 角色id
  - user_id: 用户id
- permission: 权限表
  - id: 权限id
  - name: 权限名称
  - value: 权限值, 一般是url资源字符串, 并不表示真实资源地址，只是资源的标识
  - sort: 权限排序, 自定义

两个关联表: 用户角色, 角色权限

- user_role: 用户角色关联表
  - id: 用户角色关联id
  - user_id: 用户id
  - role_id: 角色id

> user_id和role_id是多对多的关系

- role_permission: 角色权限关联表
  - id: 角色权限关联id
  - role_id: 角色id
  - permission_id: 权限id

> role_id和permission_id是多对多的关系

## 逻辑

添加用户

- 添加用户同时添加用户角色关联表
- 不需要考虑权限相关表

```sql
INSERT INTO user (name, password) VALUES ('admin', '123456');
```

```sql
INSERT INTO user_role (user_id, role_id) VALUES (user_id, role_id);
```