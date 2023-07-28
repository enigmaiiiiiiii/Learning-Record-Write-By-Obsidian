# Nginx - Log

## Set up Access Log

```c
http {
    access_log /var/log/nginx/access.log;
    server {
        listen 80;
        server_name example.com;
        access_log /var/log/nginx/example.com.access.log;
    }
}
```
