# API

## search

```
GET /<target>/_search
GET /_search
POST /<target>/_search
POST /_search
```

examples

- 请求

```
Get /my-index-0000001/_search?from=0&size=10
{
    "query": {
        "term": {
            "user.id": "kimchy"
        }
    }
}
```

- 响应


