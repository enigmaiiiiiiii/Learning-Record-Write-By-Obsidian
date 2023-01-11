# CSS support

## Component level CSS

naming convention: `ComponentName.module.css`

components/Button.module.css

```css
.error {
  color: white;
  background-color: red;
}
```

components/Button.js

```js
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```

- `import styles from './Button.module.css'` to import the module

## Global CSS

import `style.css` file in `pages/_app.js`

```js
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## From node_modules 

```js
// components/ExampleDialog.js
import '@reach/dialog/styles.css'

function ExampleDialog(props) {
  const []
  return (
    <div>
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>x</span>
      </button>
      <p>Hello there. I am a dialog.</p>
    </div>
  )
}
```

## Sass Support

config in nextjs

```js
import path from 'path'

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

export sass variable

```css
/* variables.module.scss */
$primary-color: #64ff00;

:export {
  primaryColor: $primary-color;
}
```

```js
// pages/_app.js
import variables from '../styles/variables.module.scss'

export default function MyApp({ Component, pageProps}) {
  return (
    <Layout color={variables.primaryColor}>
      <Compoenent {...pageProps} />
    </Layout>
  )
}
```



