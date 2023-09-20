# NextJS - Rendering

- [Server Side Rendering ](#server-side-rendering)
- [Client Side Rendering](#client-side-rendering)
- [server and client component](#server-and-client-component)
- [Server Side Component](#server-side-component)
- [Client Side Component](#client-side-component)

## Server Side Rendering

Steps

1. HTML generated on each request
2. Run a script on server, such script called **server-side script**
3. Rendering it to **static** HTML and CSS and send to browser(client).

## Server And Client Component

The Benefits of Separating Components into Server and Client

- server component allows developers to fully utilize the infrastructure of the server

## Server Side Component

- Components in `app` directory are server side [components](react-component.md) by default
- Functions of server side
  - **receive** request
  - do some **computation**
  - generate and send **respond**

## Client Side Rendering

1. Run a script on browser(client), called **client-side script**
2. Browser rendering client-side script to HTML and CSS

benefits of client side rendering

- Can use `useState`, `useEffect`, etc.
- Can Add Event listeners
- Can use [Browser API](javascript-bom.md)

## Client Side Component

Add `use client` at the top of component files to set them as **client side components**

- `use client` declare a boundary between server and client
- This means that by defining a `"use client"` in a file, all other modules imported into it, including child component, are considered client rendering

```js
'use client'

import { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

Function of client side

- **send request** to server

## When To Use Server and Client Components

significant scenarios

| significant scenarios                                                        | Server Component | Client Component |
| ---------------------------------------------------------------------------- | :--------------: | :--------------: |
| Fetch data                                                                   |        ✅        |        ❌        |
| Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc) |        ❌        |        ✅        |
| Use browser-only APIs                                                        |        ❌        |        ✅        |

more scenarios

| more scenario                                                           | Server Component | Client Component |
| ----------------------------------------------------------------------- | :--------------: | :--------------: |
| Access backend resources (directly)                                     |        ✅        |        ❌        |
| Keep sensitive information on the server (access tokens, API keys, etc) |        ✅        |        ❌        |
| Keep large dependencies on the server / Reduce client-side JavaScript   |        ✅        |        ❌        |
| Add interactivity and event listeners (onClick(), onChange(), etc)      |        ❌        |        ✅        |
| Use custom hooks that depend on state, effects, or browser-only APIs    |        ❌        |        ✅        |
| Use React Class components                                              |        ❌        |        ✅        |

## Summary of Rendering

Server Code

- severside component in `app` directory
- [getServerSideProps]
- [getStaticProps]
- [getStaticPaths]

Client Code

- client side component in `app` directory
- component outside `app` directory
