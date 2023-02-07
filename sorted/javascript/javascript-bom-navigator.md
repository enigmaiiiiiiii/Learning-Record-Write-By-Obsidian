# BOM Navigator

- identity of the user agent

## connection

- information about the network connecntion of a device

## cookieEnabled

- return false if setting a cookie will be ignored and true otherwise

## credentials

- 请求凭据

## geolocation

- 获取地理位置

```js
async function fx() {
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    })
  })
}
```