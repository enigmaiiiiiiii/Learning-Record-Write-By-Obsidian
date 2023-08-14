# Linux - Curl Getting Stuck

## get stuck with my proxy

description

- when I use `curl -v` to access to a localhost url, get following message

```
* Uses proxy env variable http_proxy == 'http://127.0.0.1:<PROXY_PORT>'
*   Trying 127.0.0.1:<PROXY_PORT>...
* Connected to 127.0.0.1 (127.0.0.1) port <PROXY_PORT>(#0)
> GET http://localhost:<SERVICE_PORT>/ HTTP/1.1
> Host: localhost:<SERVICE_PORT>
> User-Agent: curl/7.87.0
> Accept: */*
> Proxy-Connection: Keep-Alive
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 502 Bad Gateway
< Connection: keep-alive
< Keep-Alive: timeout=4
< Proxy-Connection: keep-alive
< Content-Length: 0
<
* Connection #0 to host 127.0.0.1 left intact
```

> because early I can access to localhost with environment variable `http_proxy` set

- my proxy has a mode called `rule`, it will ignore the localhost url
- when it set to `global`, it will proxy all the request

conclusion

- with proxy server on global mode, and http_proxy set to proxy port, curl will response 502
