# Electron - Process Model

* [Main Process](#main-process)
* [Renderer Process](#renderer-process)
* [Trigger Main Process Tasks From Render Process](#trigger-main-process-tasks-from-render-process)

## Two Process

- [Main process](#main-process)
- [Render process](#renderer-process)

## Main Process

For What

- window management

Features

- Have Access to nodejs API

## Renderer Process

For What?

- UI

Features

- Execute [preload.js](#preloadjs)
- **Has no direct access** to nodejs API(which include [electron module](electron-module.md))
- Where [Context Isolation](electron-context-isolation.md) located

## preload.js

Features

- Although runs in [render process](#renderer-process), it has access to **nodejs API**(include [electron module](electron-module.md))
- Shares a global `window` interface with render process and have access to **nodejs API**
- cannot attach variables to `window`

preload.js

```js
window.myAPI = {
    desktop: true
}
```

render.js

```js
console.log(window.myAPI)  // undefined
```

## Trigger Main Process Tasks From Render Process

