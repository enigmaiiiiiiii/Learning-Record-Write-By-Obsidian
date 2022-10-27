# Seata

- 一款开源的**分布式Transaction**解决方案
- 提供了 AT、TCC、SAGA、XA 事务模式
- AT 模式是基于**数据库**的乐观锁实现的

## 术语表

- TC: Transaction Coordinator, 事务协调者
  - 维护全局和分支事务的状态，驱动全局事务提交或回滚
- TM: Transaction Manager, 事务管理者
  - 定义全局事务的范围: 开始全局事务、提交或回滚全局事务
- RM: Resource Manager, 资源管理者
  - 管理分支事务处理的资源, 

## 一个分布式事务的生命周期

1. **TM**请求**TC**开启一个全局事务
2. **TC**生成一个**XID**作为全局事务编号
3. **RM**请求**TC**将本地事务注册为全局事务的**分支事务**, 通过全局事务**XID**关联
4. **TM**请求**TC**告诉**XID**jk对应的全局事务可以提交或回滚
5. **TC**驱动**RM**将X**ID**对应的分支事务提交或回滚


## 开始使用

[开始使用](Seata_Getting_Started.md)

## 事务模式

- AT 模式
- TCC 模式
- SAGA 模式
- XA 模式