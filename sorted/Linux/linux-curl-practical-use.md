# Linux - Practical Use Of Curl

* [Send GET request](#send-get-request)
* [download file](#download-file)
* [handle url redirect](#handle-url-redirect)
* [download file with authentication](#download-file-with-authentication)
* [Include Header](#include-header)

## Send GET request

```sh
curl www.example.com
```

send reqeust with query string

```sh
curl www.example.com?foo=bar
```

## Download file

- if use `curl` with no options, it will do a GET request and display the result to Screen

syntax:

`curl [options] [url]`

the file name will be the remote file name

```bash
curl -O [url]
```

specify the file name

```bash
curl -o [filename] [url]
```

## handle url redirect

description of this problem

- after download a file, its size is 0
- this is happenned when url being redirect
- whose response is [status code 302](http-response-message.md#status-line)
- the return content is not the file you want

solution

- use `-I` option first, to check the response header
- or use `-v` option, to check the verbose information

```bash
curl -I [url]
```

probably output like this

```
HTTP/2 302
server: GitHub.com
date: Thu, 08 Dec 2022 09:43:52 GMT
content-type: text/html; charset=utf-8
vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Encoding, Accept, X-Requested-With
location: https://someurl
```

that is to say, url is redirect to `https://someurl`

- use `-L` option, track the redirect url, and download the file

```bash
curl -L [url]
```

## download file with authentication

- use option `-u` to specify username and password

```bash
curl -u username:password https://someurl
```

## Include Header

```sh
curl -H "Authorization: Bearer TOKEN" https://someurl
```
