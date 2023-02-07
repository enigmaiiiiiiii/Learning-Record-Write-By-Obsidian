# 术语

## Node(节点)

- 运行中的Elasticsearch实例
- 比如终端运行elasticSearch-7.6.2/bin/elasticsearch.bat后，就是一个节点, 通过端口通信

```bash
elasticSearch-<version>/bin/elasticsearch
```

## cluster(集群)

- 一个或多个节点拥有cluster.name的节点组成
- 当有节点加入或移除集群后，集群重新平衡数据分布
- 主节点负责管理集群, 增减节点等
- 任何节点都可以成为主节点

## index(索引)

- 一个索引可以看作一个[SQL](mysql.md)中的database

- MySQL-database-Tables-Rows-Columns
- elasticSearch-**index**-**type**-**document**-**field**

[what is an Elasticsearch Index](elasticsearch-index-blog.md)


## type(类型)

- string
- byte, short, integer, long
- float, double
- boolean
- date

## document(文档)

> 应用中, 实体一般可以被序列化为包含键值对的JSON对象

- 一个文档: 用来保存一个[实体类](java-pojo.md)的**实例**
- 文档的数据就是实体类
- 文档除了数据, 还有一些元数据
  - _index: 文档所属的索引
  - _type: 文档表示的对象类别
  - _id: 文档的唯一标识

## Mapping(映射)

- 用来解释那些值是字符串, 那些值是数字, 那些值是日期等
- 对象字段和类型之间的映射


