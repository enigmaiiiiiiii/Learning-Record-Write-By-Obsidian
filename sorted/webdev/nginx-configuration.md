# Nginx - Configuration

* [Configuration File](#configuration-file)
* [How To Edit Configuration File](#how-to-edit-configuration-file)
* [Setting Up Simple Proxy Server](#setting-up-simple-proxy-server)

## Configuration File

Nginx will read configuration file from this 3 places:

> usually use only one of them

- `/usr/local/nginx/conf/nginx.conf`
- `/etc/nginx/nginx.conf`
- `/usr/local/etc/nginx/nginx.conf`

## Configuration File Structure

top-level directive

- `events`
- `http`: 
- `mail`
- `stream`
- `server`: 
- ...

## How To Edit Configuration File

```conf
http {
    server {
        listen 80;
        server_name example.com;
        location / {
            root /data/www
        }
    }
}
```

- location block
  - `/`: The prefix. Use to match the uri from the request
  - `root /data/www`: where server will look for the requested files

for request `http://localhost/some/example.html`

the file `/data/www/some/example.html` will be served

## Setting Up Simple Proxy Server

For nginx config like This

```conf
server {
    listen 80;
    root /data/up1;
    location / {
        proxy_pass http://localhost:8080
    }

    location ~ \.(git|jpg|png)$ {
        root /data/iamges;
    }
}
```

- this will be a simple server listening on port 80
- forward the request to `http://localhost:8080`
- all requset will from `/data/up1 ` directory
- request ending with `.git`, `.jpg`, `.png` will be mapped to `/data/images` directory
  - `\.(git|jpg|png)` is a regular expression matching uri ending with `.git`, `.jpg`, `.png`
  - regular expressoin should be preceded with `~`


