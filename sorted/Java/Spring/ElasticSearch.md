# Elasticsearch

[documentation](https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html)

- 用来代替mysql数据库的模糊搜索功能

## 术语

[术语](ElasticSearch_Terms.md)

## 原理

[原理](ElasticSearch_Principle.md)

## 启动

```bash
cd elasticSearch-<version> # 进入安装目录
./bin/elasticsearch # linux启动
./bin/elasticsearch.bat # windows启动
```

## 交互

[ElasitcSearch](ElasticSearch_Interact.md)

## ik分词器

ik_smart

- 速度快
- 精度低

ik-max-word

- 速度慢
- 词粒度更细

