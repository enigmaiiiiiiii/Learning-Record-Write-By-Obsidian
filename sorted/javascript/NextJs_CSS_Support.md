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