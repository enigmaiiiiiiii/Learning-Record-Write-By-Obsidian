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

## 分片

## document(文档)

> 应用中, 实体一般可以被序列化为包含键值对的JSON对象

- 一个文档: 可能是一个[实体类](Java_Pojo.md)的**实例**

## index(索引)

- 一个索引可以看作一个[SQL](MySQL.md)中的database


[what is an Elasticsearch Index](ElasticSearch_Index_Blog.md)

## Mapping


