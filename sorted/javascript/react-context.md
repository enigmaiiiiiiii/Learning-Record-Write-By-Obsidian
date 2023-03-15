# React Context

## what is this

- provide some informations to entire **tree blow** it

## when to use

> don't overuse it, sometimes you don't need it

- Theming: if you app lets the user change the theme
- Current account: many components might need to know the currently logged in user
- Routing: most routing solution use context to hold current route
- Managing state
  - a lot of state closer the top of app, so if
  - long distance component want to change the state of app

## Usage

create a context

- common way is to manange a context in a file
- `DemoContext.js`

```js
import { createContext } from 'react';

export const LevelContext = createContext(val)
```

- `val` is default context value
- if you don't provide a default value, you can use `null`

create root component for context

```js
import LevelContext from './DemoContext.js'

export default function ContextRoot() {

  return  (
    <LevelContext.Provider value={val}>
      <App />
    </LevelContext.Provider>
  )
}
```

- `val` is context for the tree blow it

read context

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
