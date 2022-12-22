# clsx

## use

```js
import styles from './alert.module.css';
import clsx from 'clsx';

exprot default function Alert({children, type}) {
  return (
    <div
      className={cn({
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning',
        [styles.info]: type === 'info',
      })}
    >
     {children}
    </div>
  )
}
```
