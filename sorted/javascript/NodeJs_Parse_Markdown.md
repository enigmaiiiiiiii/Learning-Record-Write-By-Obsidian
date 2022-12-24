# Parse

to parse a file path is `/posts/first-post.md`

```
---
title: hello markdown
slug: home
---

# First Post

```

```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const filePath = path.join(process.cwd(), 'posts', 'first-post.md');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const result = matter(fileContent);
console.log(result)
```

output

```
{
  content: '\r\n# First Post\r\n',
  data: { title: 'hello', slug: 'home' },
  isEmpty: false,
  excerpt: ''
}
```