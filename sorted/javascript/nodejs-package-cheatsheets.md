# Package CheatSheet

## gray-matter

#markdown

install

```bash
npm install --save gray-matter
```

use

- called `matter(data)` directly

```js
import matter from 'gray-matter'
console.log(matter('---\ntitle: My document\n---\nThis is my document.'));
```

## date-fns

#date

install

```bash
npm install date-fns
```

use

```js
import {parseISO, format} from 'date-fns'
let date = parseISO('2022-12-23')
console.log(date);  // 2022-12-23T00:00:00.000Z
console.log(format(date, 'yyyy-MM-dd'));  // 2022-12-23
```

## Socket.IO

```bash
npm install socket.io
```