# Create Nextjs App

## create workspace

```bash
npx create-next-app
```

## custom document

create `pages/_document.js`

```jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```