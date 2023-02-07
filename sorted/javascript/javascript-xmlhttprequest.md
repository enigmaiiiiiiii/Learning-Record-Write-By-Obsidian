# XMLHttpRequest

```js
function reqListener() {
    console.log(this.responseText);
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://example.org/example.txt");
oReq.send();
```

- open()初始化请求
- send()发送请求