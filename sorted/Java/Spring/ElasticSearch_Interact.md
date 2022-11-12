# 交互

- 交互方式: java API, 客户端, 传输客户端
- 通过http协议, 使用RESTful API 向Elasticsearch服务器发送请求

## 轻量搜索

查询tweet类型中, tweet字段包含"elasticsearch"单词的文档

```bash
GET /_all/tweet/_search?q=tweet:ealsticsearch
```

查询所有包含mary的文档

- 相当于新增了一个`_all`的额外类型
- `_all`的值由文档中所有字段的值组成

```bash
GET /_all/_search?q=mary
```

## 请求

elasticSearch请求和任何[HTTP请求](Http_Request_Message.md)一样

```bash
curl -x<VERB> '<PROTOCOL>://<HOST>:<PORT>/API?<query_string> -d '<BODY>'
```

- verb: http方法
- protocol: http协议
- host: 主机名, 如localhost
- port: 端口号, 如9200
- path: 要访问的资源
- query_string: 查询字符串
- Body: 请求体, 要求使用json格式

## 响应

- 状态码和json格式的响应体

如计算集群中中文数量的请求

```bash
curl -XGET 'localhost:9200/_count?pretty' -d '
{
    "query": {
        "match_all": {}
    }
}'
```

响应

```json
{
    "count": 0,
    "_shards": {
        "total": 5,
        "successful": 5,
        "failed": 0
    }
}
```
