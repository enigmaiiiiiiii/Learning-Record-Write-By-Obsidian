# Redis

- 是Key-Value数据库，
- 数据类型
  - 字符串(String)
  - 哈希(Hash)
  - 列表(list)
  - 集合(sets)和有序集合(sorted sets)

## 安装

[windows地址](https://github.com/poradowski/redis/releases)

check redis version

```bash
redis-server --version
```

## 启动

启动客户端

```bash
redis-cli
```

启动服务

```bash
redis-server
```

## 客户端操作

- exit: 从redis客户端退出
- shutdown: 关闭redis服务

键(key)操作

- set key value: 设置key的值为value
- del key: 删除key
- exists key: 判断key是否存在
- keys *: 获取所有的key
- keys key: 查询是否存在key
- expire key seconds: 设置key的过期时间

值(value)获取

- get key: 获取**String**类型的value
- hgetall key: 获取**Hash**类型的value
- lrange key start end: 获取**List**类型的value
- smembers key: 获取**Set**类型的value

## Redis下标

- 正向下标: 0标识第一个元素，1标识第二个元素，以此类推
- 反向下标: -1表示最后一个元素, -2

## Redis key命名最佳实践

> 命名约定(naming convention)

- 保存对象属性: `object:id:subobjects`

```
user:1:roles
user:john:roles
```

使用命名空间: `namespace:object:id:subobjects`

- 适合用在**多个应用开发**的情况下

```
tenant:user:1:roles
```

- 列表

## redis适合的场景

- 访问频率高的数据
- 修改频率低的数据
- 一致性要求不高的数据

## redis使用规范

- redis虽然可以存储集合类型的值, 一般不保存集合, 因为redis会保存集合的各种子集

## redis原理

[redis原理](redis-principle.md)
