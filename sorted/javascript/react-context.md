# React Context

- [what is this](#what-is-this)
- [when to use](#when-to-use)
- [how to use](#usage)

## what is this

- provide some informations to entire **tree below** it

## when to use

- Theming: if you app lets the user change the theme
- Current account: many components might need to know the currently logged in user
- Routing: most routing solution use context to hold current route
- Managing state
  - a lot of state closer the top of app, so if
  - long distance component want to change the state of app

> don't overuse it, sometimes you don't need it

## how to use

1. create a context

- common way is to manange a context in a file
- `DemoContext.js`

```js
import { createContext } from 'react';

export const LevelContext = createContext(val)
```

- `val` is default context value
- if you don't provide a default value, you can use `null`

2. create root component for context

```js
import LevelContext from './DemoContext.js'

export default function ContextRoot() {

  return  (
    <LevelContext.Provider value={val}>
      <Foo />
    </LevelContext.Provider>
  )
}
```

- `val` is context for the tree blow it

3. read context in a child component of root

```js
import { useContext } from 'react';
import LevelContext from './DemoContext.js'

export default function Foo() {

  const val = useContext(LevelContext)

  return  (
    <div>
      {val}
    </div>
  )
}
```
