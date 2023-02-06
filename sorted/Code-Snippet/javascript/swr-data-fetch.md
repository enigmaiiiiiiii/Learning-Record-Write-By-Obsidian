# swr data fetch

```js
import React from 'react';
import useSWR from 'swr';

async function getGeo() {
  return new Promise((resolve, reject) => {
    resolve({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  })
}

export default function Demo( ) {
  const { data } = useSWR("geo", getGeo);
  const position = JSON.stringify(data);
  return (
    <div>
      <h1>Geo</h1>
      <p>{position}</p>
    </div>
  )
}
```

`useSWR("geo", getGeo)`

- key `geo` is not necessary, can be any string
- because `getGeo()` take no parameter

