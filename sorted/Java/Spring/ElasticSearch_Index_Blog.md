# what is an ElasticSearch Index

## 基本定义

- 一个索引对应一个database

## 索引和数据之间的关联

MySQL对应elasticSearch

- MySQL $\right$ database $\right$ Tables $\right$ Rows $\right$ Columns
- elasticSearch $\right$ **index** $\right$ **type** $\right$ **document** $\right$ **field**


- 集群可以包含几个index(database)
- 索引包含几个type(table)
- 类型包含几个document(row)
- 文档包含几个properties(column)

比如卡车运输场景中, **卡车订单**索引可以包含几个type: 

- start
- end
- truck

start类型中一个document, 包含了这个**订单**的所有细节

搜索语句可以是: http://localhost:9200/truck_order/start/order_1


## 使用索引保存日志

一个索引对应一个日志文件, 索引名可能是:

- logs-2013-02-22
- logs-2013-02-21
- logs-2013-02-20

同时查询多个索引

```
curl -XGET localhost:9200/logs-2013-02-22,logs-2013-02-21/Errors/_search?query="q:ErrorMessage"
```

- 搜索这两天的日志

