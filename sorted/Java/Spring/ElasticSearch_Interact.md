# 交互

- 交互方式: java API, 客户端, 传输客户端
- 通过http协议, 使用RESTful API 向Elasticsearch服务器发送请求

## 请求

elasticSearch请求和任何[HTTP请求](Http_Request_Message.md)一样

```bash
curl -x<VERB> '<PROTOCOL>://<HOST>:<PORT>?<QUERY_STRING>' -d '<BODY>'
```

- verb: http方法
- protocol: http协议
- host: 主机名, 如localhost
- port: 端口号, 如9200
- path: 要访问的资源
- query_string: 查询字符串
- Body: 请求体

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
