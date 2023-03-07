# Use Google Font

## get google url from official website

click at right top corner to get url

get `<link>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Smokum&display=swap" rel="stylesheet">
```

## use in nextjs

paste `<link>` pages/_document.js

```js
import { Html, Head, Main, NextScript } from 'next/document'
//...
<Head />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Smokum&display=swap" rel="stylesheet">
```

MyLayout.module.css

```css
.label {
  font-family: 'Press Start 2P', cursive;
}
```

components/MyLayout.js

```js
import styles from './MyLayout.module.css'

export default function MyLayout({ children }) {
  return (
    <div className={styles.label}>
      content
    </div>
  )
}
```
