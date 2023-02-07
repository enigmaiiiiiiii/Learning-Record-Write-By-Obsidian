# 交互

- 交互方式: java API, 客户端, 传输客户端
- 通过http协议, 使用RESTful API 向Elasticsearch服务器发送请求


## 保存一条数据

```bash
PUT /website/blog/123
{
    "title": "My first bloc entry",
    "text": "Just trying this out...",
    "date": "2014-01-01"
}
```

elasticsearch响应

```json
{
    "_index": "website",
    "_type": "blog",
    "_id": "123",
    "_version": 1,
    "created": true
}
```

## 取出一条数据

```bash
Get /website/blog/123?pretty
```

- pretty参数: 使得返回的json格式化

响应

```json
{
    "_index": "website",
    "_type": "blog",
    "_id": "123",
    "_version": 1,
    "_seq_no": 0,
    "_primary_term": 1,
    "found": true,
    "_source": {
        "title": "My first bloc entry",
        "text": "Just trying this out...",
        "date": "2014-01-01"
    }
}
```

- _source字段: 文档的数据

取出文档的一部分

```bash
GET /website/blog/123?_source=title, text
```
> 类似sql: select title, text from website.blog where id = 123



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

elasticSearch请求和任何[HTTP请求](http-request-message.md)一样

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
