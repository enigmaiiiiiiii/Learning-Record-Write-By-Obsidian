# Elasticsearch

[documentation](https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html)

- 用来代替mysql数据库的模糊搜索功能

## 术语

[术语](elasticsearch-terms.md)

## 原理

[原理](elasticsearch-principle.md)

## 启动

```bash
cd elasticSearch-<version> # 进入安装目录
./bin/elasticsearch # linux启动
./bin/elasticsearch.bat # windows启动
```

## 交互

[ElasitcSearch](elasticsearch-interact.md)

## 映射

[映射](elasticsearch-mapping.md)

## API

[API](elasticsearch-api.md)

## ELK日志同步

- ELK: Elasticsearch, Logstash, Kibana

## ik分词器

ik_smart

- 速度快
- 精度低

ik-max-word

- 速度慢
- 词粒度更细

